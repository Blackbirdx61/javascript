// ── State variables ──
let images     = [];   // array of image File objects
let current    = 0;    // index of current image
let playing    = true; // auto-advance on or off
let timer      = null; // holds the setInterval reference
const DELAY    = 4000; // milliseconds between slides (4 seconds)

// ── Step 1: User selects a folder ──
document.getElementById('folderInput').addEventListener('change', function(e) {
  // Filter selected files to images only
  const allFiles = Array.from(e.target.files);
  images = allFiles
    .filter(f => f.type.startsWith('image/'))
    //.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically
	images = allFiles.filter(f => f.type.startsWith('image/'));
	shuffle(images);

  // Update the count display
  const countDiv = document.getElementById('fileCount');
  if (images.length === 0) {
    countDiv.textContent = 'No image files found in that folder';
    document.getElementById('startBtn').style.display = 'none';
  } else {
    countDiv.textContent = `${images.length} images found`;
    document.getElementById('startBtn').style.display = 'inline-block';
  }
});

// ── Fisher-Yates shuffle ──
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Step 2: Start the slideshow ──
function startSlideshow() {
  if (images.length === 0) return;
  current = 0;
  document.getElementById('setup').style.display     = 'none';
  document.getElementById('slideshow').style.display = 'block';
  showSlide(current);
  startTimer();
}

// ── Display a slide by index ──
function showSlide(index) {
  const img  = document.getElementById('slideImg');
  const file = images[index];

  // FileReader converts the File object to a data URL the img tag can display
  const reader = new FileReader();
  reader.onload = function(e) {
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Update counter and filename display
  document.getElementById('slideCounter').textContent = `${index + 1} / ${images.length}`;
  document.getElementById('fileName').textContent     = file.name;
}

// ── Navigate forward ──
function nextSlide() {
  current = (current + 1) % images.length; // wrap around to start
  showSlide(current);
}

// ── Navigate backward ──
function prevSlide() {
  current = (current - 1 + images.length) % images.length; // wrap around to end
  showSlide(current);
}

// ── Auto-advance timer ──
function startTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, DELAY);
}

// ── Play / Pause toggle ──
function togglePlay() {
  playing = !playing;
  document.getElementById('playBtn').textContent = playing ? '⏸ Pause' : '▶ Play';
  if (playing) {
    startTimer();
  } else {
    clearInterval(timer);
  }
}

// ── Exit back to setup ──
function exitSlideshow() {
  clearInterval(timer);
  document.getElementById('slideshow').style.display = 'none';
  document.getElementById('setup').style.display     = 'block';
}

// ── Keyboard controls ──
document.addEventListener('keydown', function(e) {
  if (document.getElementById('slideshow').style.display === 'none') return;
  switch(e.key) {
    case 'ArrowRight': nextSlide();    startTimer(); break;
    case 'ArrowLeft':  prevSlide();    startTimer(); break;
    case ' ':          togglePlay();               break;
    case 'Escape':     exitSlideshow();             break;
  }
});