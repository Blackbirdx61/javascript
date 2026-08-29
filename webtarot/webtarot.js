
 // var i=Math.floor(Math.random()*10) 

 /* var myTarotDeck()= new Array();   */



function get_random()
{
    var ranNum= Math.floor(Math.random()*77);
    return ranNum; 
// http://www.pageresource.com/jscript/jrandom.htm 
}


function cardsDown(){

crd01.src = mydeck[78];
crd02.src = mydeck[78];
crd03.src = mydeck[78]; }


function PullCards(){

cardsDown();

//shuffle_deck();
shuffle(mydeck);

/*
// 
setTimeout(function() {openLinks(linx)}, 3000); 
*/

setTimeout (function(){crd01.src = mydeck[1];},1500);
setTimeout (function(){crd02.src = mydeck[2];},2000);
setTimeout (function(){crd03.src = mydeck[3];},2500);

// crd02.src = mydeck[2];
// crd03.src = mydeck[3];  
for (let i = 0; i <= 78; i++) {
  console.log(`card ${i} = ${mydeck[i]}` );
}

}

 // end of PullCard Function. 



//setTimeout ("function()",1000) 


/*function shuffle_deck(){ 
var IL=0; var OL=0; var wrk=0; var wrkhold="string";

// for(count = 0; count < 10; count++){} 

for (OL=0; OL<3; OL++) {

for (IL=0; IL<78; IL++){ 

wrk=get_random(); 
wrkhold=mydeck[IL];
mydeck[IL]=mydeck[wrk]; 
mydeck[wrk]=wrkhold ;
//console.log(`Reels stopped on symbols: ${sym0}, ${sym1}, ${sym2}`);
//console.log(`card# ${wrk} = ${wrkhold} `);

}
// end long loop  
} 
// end function
} */           
function shuffle(deck) {
  for (let i = 77; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  console.log("Deck shuffled.");
  //return deck;
}



/* Creates and preloads the MyDeck Array */

var mydeck = ["img/gd/gendron_00.jpg",
"img/gd/gendron_01.jpg",
"img/gd/gendron_02.jpg",
"img/gd/gendron_03.jpg",
"img/gd/gendron_04.jpg",
"img/gd/gendron_05.jpg",
"img/gd/gendron_06.jpg",
"img/gd/gendron_07.jpg",
"img/gd/gendron_08.jpg",
"img/gd/gendron_09.jpg",
"img/gd/gendron_10.jpg",
"img/gd/gendron_11.jpg",
"img/gd/gendron_12.jpg",
"img/gd/gendron_13.jpg",
"img/gd/gendron_14.jpg",
"img/gd/gendron_15.jpg",
"img/gd/gendron_16.jpg",
"img/gd/gendron_17.jpg",
"img/gd/gendron_18.jpg",
"img/gd/gendron_19.jpg",
"img/gd/gendron_20.jpg",
"img/gd/gendron_21.jpg",
"img/gd/gendron_22.jpg",
"img/gd/gendron_23.jpg",
"img/gd/gendron_24.jpg",
"img/gd/gendron_25.jpg",
"img/gd/gendron_26.jpg",
"img/gd/gendron_27.jpg",
"img/gd/gendron_28.jpg",
"img/gd/gendron_29.jpg",
"img/gd/gendron_30.jpg",
"img/gd/gendron_31.jpg",
"img/gd/gendron_32.jpg",
"img/gd/gendron_33.jpg",
"img/gd/gendron_34.jpg",
"img/gd/gendron_35.jpg",
"img/gd/gendron_36.jpg",
"img/gd/gendron_37.jpg",
"img/gd/gendron_38.jpg",
"img/gd/gendron_39.jpg",
"img/gd/gendron_40.jpg",
"img/gd/gendron_41.jpg",
"img/gd/gendron_42.jpg",
"img/gd/gendron_43.jpg",
"img/gd/gendron_44.jpg",
"img/gd/gendron_45.jpg",
"img/gd/gendron_46.jpg",
"img/gd/gendron_47.jpg",
"img/gd/gendron_48.jpg",
"img/gd/gendron_49.jpg",
"img/gd/gendron_50.jpg",
"img/gd/gendron_51.jpg",
"img/gd/gendron_52.jpg",
"img/gd/gendron_53.jpg",
"img/gd/gendron_54.jpg",
"img/gd/gendron_55.jpg",
"img/gd/gendron_56.jpg",
"img/gd/gendron_57.jpg",
"img/gd/gendron_58.jpg",
"img/gd/gendron_59.jpg",
"img/gd/gendron_60.jpg",
"img/gd/gendron_61.jpg",
"img/gd/gendron_62.jpg",
"img/gd/gendron_63.jpg",
"img/gd/gendron_64.jpg",
"img/gd/gendron_65.jpg",
"img/gd/gendron_66.jpg",
"img/gd/gendron_67.jpg",
"img/gd/gendron_68.jpg",
"img/gd/gendron_69.jpg",
"img/gd/gendron_70.jpg",
"img/gd/gendron_71.jpg",
"img/gd/gendron_72.jpg",
"img/gd/gendron_73.jpg",
"img/gd/gendron_74.jpg",
"img/gd/gendron_75.jpg",
"img/gd/gendron_76.jpg",
"img/gd/gendron_77.jpg",
"img/gd/gendron_78.jpg", ];  








