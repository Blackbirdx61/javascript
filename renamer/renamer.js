// ── renamer.js — Batch rename every file in a folder ──
//
// Every file gets:  <baseName>_<number>.<original extension>
//   e.g.  IMG_4471.JPG, scan (2).pdf, notes  →  Trip_001.JPG, Trip_002.pdf, Trip_003
//
// Uses the File System Access API (Chrome / Edge only).

let dirHandle;      // the folder the user picked (shared by both buttons)


// ── Helpers ─────────────────────────────────────────────────

// Same idea as rightOfLastDot() — Q72 on the study sheet.
// Returns the extension INCLUDING the dot (".jpg"), or "" if there isn't one.
function getExtension( fileName ) {
    const i = fileName.lastIndexOf( "." );

    // i === -1  → no dot at all          ("README")
    // i === 0   → hidden file, no base   (".gitignore")
    if ( i <= 0 ) {
        return "";
    }

    return fileName.slice( i );     // keep the dot, keep the original case
}

// Builds "Trip_007.jpg" from ( "Trip", 7, 3, ".jpg" )
function buildNewName( base, number, digits, ext ) {
    const padded = String( number ).padStart( digits, "0" );   // 7 → "007"
    return `${ base }_${ padded }${ ext }`;
}

// Renames one file.  The API has no simple rename, so we copy then delete.
async function renameFile( folder, oldName, newName ) {
    const oldHandle = await folder.getFileHandle( oldName );
    const file      = await oldHandle.getFile();

    const newHandle = await folder.getFileHandle( newName, { create: true } );
    const writable  = await newHandle.createWritable();
    await writable.write( file );
    await writable.close();

    await folder.removeEntry( oldName );
}

// Updates the counter box:  "3 / 12"
function showCounter( done, total ) {
    document.getElementById( "counter" ).innerText = `${ done } / ${ total }`;
}


// ── Live example under the inputs ───────────────────────────

function updatePreview() {
    const base   = document.getElementById( "baseName" ).value || "Vacation";
    const start  = Number( document.getElementById( "startNum" ).value ) || 0;
    const digits = Number( document.getElementById( "padDigits" ).value ) || 1;

    document.getElementById( "preview" ).innerText =
        `Example: ${ buildNewName( base, start, digits, ".jpg" ) }`;
}

[ "baseName", "startNum", "padDigits" ].forEach( id =>
    document.getElementById( id ).addEventListener( "input", updatePreview )
);


// ── Button 1: pick the folder ───────────────────────────────

document.getElementById( "selectDir" ).addEventListener( "click", async () => {
    console.log( "folderButtonPressed" );
    try {
        dirHandle = await window.showDirectoryPicker( { mode: "readwrite" } );
        document.getElementById( "folderName" ).innerText = `Selected: ${ dirHandle.name }`;
        document.getElementById( "renameBtn" ).disabled = false;
    } catch ( err ) {
        console.log( "User cancelled folder selection" );
    }
} );


// ── Button 2: rename everything ─────────────────────────────

document.getElementById( "renameBtn" ).addEventListener( "click", async () => {
    const base   = document.getElementById( "baseName" ).value.trim();
    const start  = Number( document.getElementById( "startNum" ).value );
    const digits = Number( document.getElementById( "padDigits" ).value );
    const status = document.getElementById( "status" );
    const button = document.getElementById( "renameBtn" );

    if ( !base ) {
        alert( "Please enter a new base name." );
        return;
    }

    // STEP 1 — Take a snapshot of the file names FIRST.
    // Renaming while looping over dirHandle.values() would change the folder
    // under our feet, and the loop could pick up files we just created.
    const names = [];
    for await ( const entry of dirHandle.values() ) {
        if ( entry.kind === "file" && !entry.name.startsWith( "." ) ) {
            names.push( entry.name );
        }
    }
    names.sort( ( a, b ) => a.localeCompare( b, undefined, { numeric: true } ) );
    // numeric: true → "img2" sorts before "img10", like Windows Explorer

    const total = names.length;
    if ( total === 0 ) {
        status.innerText = "No files found in this folder.";
        return;
    }

    if ( !confirm( `Rename ${ total } files to ${ buildNewName( base, start, digits, ".ext" ) } …?` ) ) {
        return;
    }

    button.disabled = true;
    showCounter( 0, total );

    try {
        // STEP 2 — Park every file under a temporary name.
        // Why? If the folder already holds "Trip_002.jpg", writing the new
        // Trip_002.jpg would OVERWRITE it before we got to it — lost file.
        // Two passes guarantee no new name ever collides with an old one.
        const temps = [];
        for ( let i = 0; i < total; i++ ) {
            const ext  = getExtension( names[ i ] );
            const temp = `__renaming_${ i }__${ ext }`;
            await renameFile( dirHandle, names[ i ], temp );
            temps.push( temp );
            status.innerText = `Preparing… ${ i + 1 } / ${ total }`;
        }

        // STEP 3 — Give every parked file its final name.
        let count = 0;
        for ( let i = 0; i < total; i++ ) {
            const ext     = getExtension( temps[ i ] );
            const newName = buildNewName( base, start + i, digits, ext );
            await renameFile( dirHandle, temps[ i ], newName );
            count++;
            showCounter( count, total );
        }

        status.innerText = `Successfully renamed ${ count } files!`;

    } catch ( err ) {
        status.innerText = `Stopped with an error: ${ err.message }`;
        console.error( err );
    } finally {
        button.disabled = false;
    }
} );
