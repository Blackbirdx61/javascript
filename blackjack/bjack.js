// ═══════════════════════════════════════════════════════
//  bjackR.js — Blackjack Engine Refactored
//  Incorporates: gameState loop, cleanup, BJ flags,
//  bust flags, ace detection, full globals reset.
// ═══════════════════════════════════════════════════════

// ── Globals ──
var plrbank      = 500;
var plrbet       = 0;
var plrAceCount  = 0;
var dlrAceCount  = 0;
var plrSum       = 0;
var dlrSum       = 0;
var currentBet   = 0;
var betLocked    = false;
var plrBJ        = false;
var dlrBJ        = false;
var plrBust      = false;
var dlrBust      = false;
let gameState    = "betting";
let deck         = null;
let plrCardCount = 2;
let dlrCardCount = 2;
let plrHand      = [];
let dlrHand      = [];

// ── Split globals ──
// While a split is being played, the plr* globals always hold the
// ACTIVE hand. When hand 1 finishes, its result is saved in hand0
// and the plr* globals are reloaded for hand 2.
let splitActive  = false;          // player split this round
let activeHand   = 0;              // 0 = main hand, 1 = split hand
let waitCard     = null;           // main-hand card waiting to be played second
let splitAces    = false;          // split aces get one card each
let baseBet      = 0;              // original bet (each split hand starts here)
let hand0        = null;           // { sum, bust, bet } of finished hand 1
let slotPrefix   = "PlayerCrd0";   // card-slot row the player draws into

// ═══════════════════════════════════════════════════════
//  CARD CLASS
// ═══════════════════════════════════════════════════════
class Card {
  constructor(suit, rank, crdval, crdsrc) {
    this.suit   = suit;
    this.rank   = rank;
    this.crdval = crdval;
    this.crdsrc = crdsrc;
  }
}

const cardBack = new Card('back', 'back', 0, 'img/cards/bjdeck/bjd0.png');

// ═══════════════════════════════════════════════════════
//  DECK CLASS
// ═══════════════════════════════════════════════════════
class Deck {
  constructor() {
    this.cards = [];
    this.newdeck();
  }

  newdeck() {
    const suits  = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const ranks  = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
    const values = [ 11,   2,  3,  4,  5,  6,  7,  8,  9,  10,   10,    10,    10];
    this.cards = [];
    let imgIdx = 1;
    for (let suit of suits) {
      for (let r = 0; r < ranks.length; r++) {
        const crdsrc = `img/cards/bjdeck/bjd${imgIdx}.png`;
        this.cards.push(new Card(suit, ranks[r], values[r], crdsrc));
        imgIdx++;
      }
    }
  }

  static get back() {
    return 'img/cards/bjdeck/bjd0.png';
  }
}

// ═══════════════════════════════════════════════════════
//  GAME LOOP
// ═══════════════════════════════════════════════════════
function gameLoop() {
  console.log("gameState: " + gameState);
  switch(gameState) {
    case "betting":    placeYourBets(); break;
    case "dealing":    deal();          break;
    case "playerTurn": playerTurn();    break;
    case "dealerTurn": dealerTurn();    break;
    case "eval":       evalHand();      break;
    case "cleanup":    cleanup();       break;
  }
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
blkjckini();

function blkjckini() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("DealerCrd0" + i).style.visibility = "visible";
    document.getElementById("PlayerCrd0" + i).style.visibility = "visible";
  }
  console.log("blkjckini called");
}

function newhandini() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("DealerCrd0" + i).style.visibility = "hidden";
    document.getElementById("PlayerCrd0" + i).style.visibility = "hidden";
    document.getElementById("PlayerSCrd0" + i).style.visibility = "hidden";
  }
  resetSplitLayout();
  console.log("newhandini called");
}

// ═══════════════════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════════════════
function main() { // program entry point: first click on New Game

  newhand();
}

// ═══════════════════════════════════════════════════════
//  SHUFFLE
// ═══════════════════════════════════════════════════════
function shuffle(deck) {
  for (let i = deck.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
  }
  console.log("Deck shuffled.");
  return deck;
}

// ═══════════════════════════════════════════════════════
//  NEW GAME
// ═══════════════════════════════════════════════════════
function newgame() {
  deck = new Deck();
  deck = shuffle(deck);
  console.log(`Deck created — ${deck.cards.length} cards.`);
}

// ═══════════════════════════════════════════════════════
//  NEW HAND
// ═══════════════════════════════════════════════════════
function newhand() {
	  if (!deck || deck.cards.length < 14) {   // reshuffle between hands, not mid-hand
    newgame(); }
  newhandini();
  document.getElementById("msgtxt").textContent = "Place your bets";
  console.log("newhand called");
  gameState = "betting";
  gameLoop();
}

// ═══════════════════════════════════════════════════════
//  ACE HANDLER
//  aceCheck  — call after each card is added to a sum
//  bustCheck — call after sum is updated to flip 11→1
//  PlrDlr: 0 = player, 1 = dealer
// ═══════════════════════════════════════════════════════
function aceCheck(card, PlrDlr) {
  if (card.rank === 'Ace') {
    if (PlrDlr === 0) plrAceCount++;
    else dlrAceCount++;
  }
}

function bustCheck(PlrDlr) {
  if (PlrDlr === 0) {
    if (plrSum > 21 && plrAceCount > 0) {
      plrSum -= 10;
      plrAceCount--;
      console.log("Ace flipped 11→1 | plrSum: " + plrSum);
    }
  } else {
    if (dlrSum > 21 && dlrAceCount > 0) {
      dlrSum -= 10;
      dlrAceCount--;
      console.log("Ace flipped 11→1 | dlrSum: " + dlrSum);
    }
  }
}

// ═══════════════════════════════════════════════════════
//  BETTING
// ═══════════════════════════════════════════════════════
function placeYourBets() {
  currentBet = 0;
  betLocked  = false;
  //updateBetDisplay();

  document.getElementById("btnNew").style.visibility   = "hidden";
  document.getElementById("btnStand").style.visibility = "visible";

  const chips = [
    { id: "chip5",  value: 5  },
    { id: "chip10", value: 10 },
    { id: "chip25", value: 25 },
  ];

  chips.forEach(chip => {
    const el = document.getElementById(chip.id);
    el.onclick = function() {
      if (betLocked) return;                                  // no betting mid-hand
      if (currentBet + chip.value > plrbank) {                // can't bet more than the bank
        document.getElementById("msgtxt").textContent = "Not enough in bank!";
        return;
      }
      currentBet += chip.value;
      updateBetDisplay();
    };
    el.oncontextmenu = function(e) {
      e.preventDefault();
      if (betLocked) return;
      currentBet = Math.max(0, currentBet - chip.value);
      updateBetDisplay();
    };
  });

  document.getElementById("betcircleimg").onclick = function() {
    if (betLocked || currentBet === 0) return;               // stops re-deal mid-hand
    betLocked = true;
    plrbet    = currentBet;
    plrbank   = plrbank - plrbet;
    console.log("Bet locked in: $" + plrbet + " | Bank: $" + plrbank);
    placechips(plrbet);
    gameState = "dealing";
    gameLoop();
  };
}

function placechips(plrbet) {
  document.getElementById("msgtxt").textContent        = "Good Luck!";
  document.getElementById("betTxt").textContent        = "$" + plrbet;
  document.getElementById("mychips").style.visibility  = "visible";
  document.getElementById("txtbox01").textContent      = "Bank: $" + plrbank;
  console.log("place chips bet= " + plrbet + " || plrbank= " + plrbank);
}

function updateBetDisplay() {
  document.getElementById("msgtxt").textContent = "Bet = $" + currentBet;
}

// ═══════════════════════════════════════════════════════
//  DEAL
// ═══════════════════════════════════════════════════════
function deal() {
  plrHand = [];
  dlrHand = [];

  // Deal alternating — Player, Dealer, Player, Dealer
  plrHand.push(pullcard()); dlrHand.push(pullcard());
  plrHand.push(pullcard()); dlrHand.push(pullcard());

  // Display player cards
  for (let i = 0; i < plrHand.length; i++) {
    let cardDiv = document.getElementById("PlayerCrd0" + (i + 1));
    cardDiv.querySelector("img").src = plrHand[i].crdsrc;
    cardDiv.style.visibility = "visible";
  }

  // Dealer card 1 — hole card (face down)
  let dlrCard1 = document.getElementById("DealerCrd01");
  dlrCard1.querySelector("img").src = Deck.back;
  dlrCard1.style.visibility = "visible";

  // Dealer card 2 — face up
  let dlrCard2 = document.getElementById("DealerCrd02");
  dlrCard2.querySelector("img").src = dlrHand[1].crdsrc;
  dlrCard2.style.visibility = "visible";

  console.log("P1: " + plrHand[0].crdsrc);
  console.log("P2: " + plrHand[1].crdsrc);
  console.log("D1: " + dlrHand[0].crdsrc);
  console.log("D2: " + dlrHand[1].crdsrc);

  // Calculate totals
  plrSum = plrHand[0].crdval + plrHand[1].crdval;
  dlrSum = dlrHand[0].crdval + dlrHand[1].crdval;

  // Ace detection on initial deal
  plrHand.forEach(card => aceCheck(card, 0));
  dlrHand.forEach(card => aceCheck(card, 1));

  // Adjust if either starts over 21 (e.g. two Aces)
  bustCheck(0);
  bustCheck(1);

  console.log("Player total: " + plrSum + " | Dealer total: " + dlrSum);
  console.log("plrAceCount: " + plrAceCount + " | dlrAceCount: " + dlrAceCount);

  // Update message box
  document.getElementById("msgtxt").textContent = "Player: " + plrSum;

  // Check for blackjack
  if (plrSum === 21 && dlrSum === 21) {
    plrBJ = true; dlrBJ = true;
    gameState = "eval"; gameLoop();
  } else if (dlrSum === 21) {
    dlrBJ = true;
    gameState = "eval"; gameLoop();
  } else if (plrSum === 21) {
    plrBJ = true;
    gameState = "eval"; gameLoop();
  } else {
    gameState = "playerTurn"; gameLoop();
  }
}

// ═══════════════════════════════════════════════════════
//  PULL CARD
// ═══════════════════════════════════════════════════════
function pullcard() {
  if (deck.cards.length === 0) {
    console.log("Deck empty — reshuffling!");
    newgame();
  }
  let crdtmp = deck.cards.pop();
  if (crdtmp) {
    console.log(`You drew the ${crdtmp.rank} of ${crdtmp.suit}`);
  }
  return crdtmp;
}

// ═══════════════════════════════════════════════════════
//  PLAYER TURN
// ═══════════════════════════════════════════════════════
function playerTurn() {
  showTurnMsg();
  console.log("playerTurn called — plrSum: " + plrSum);

  document.getElementById("buttons").onclick = function(e) {
    // handler stays attached between hands, so only act on a live, playable hand
    // (split aces get no choices — they auto-stand)
    if (gameState !== "playerTurn" || plrBust || splitAces) return;
    const btn = e.target.closest("button");
    if (!btn) return;
    switch(btn.id) {
      case "btnHit":    playerHit();    break;
      case "btnStand":  playerStand();  break;
      case "btnDouble": playerDouble(); break;
      case "btnSplit":  splitHand();    break;
    }
  };
}

// "Player: 14" normally; "Hand 1: 14" / "Hand 2: 18" during a split
function handLabel() {
  return splitActive ? "Hand " + (activeHand + 1) : "Player";
}

function showTurnMsg() {
  document.getElementById("msgtxt").innerHTML =
    handLabel() + ": " + plrSum + "<br>Hit or Stand?";
}

// Pull one card into the ACTIVE hand: sum, aces, and the right card slot.
function drawPlayerCard() {
  let card = pullcard();
  plrHand.push(card);
  aceCheck(card, 0);
  plrSum += card.crdval;
  bustCheck(0);
  plrCardCount++;
  let cardDiv = document.getElementById(slotPrefix + plrCardCount);
  if (cardDiv) {                                   // only 6 slots per hand
    cardDiv.querySelector("img").src = card.crdsrc;
    cardDiv.style.visibility = "visible";
  }
  if (plrSum > 21) plrBust = true;
  return card;
}

function playerHit() {
  let card = drawPlayerCard();
  console.log(handLabel() + " hits: " + card.rank + " | plrSum: " + plrSum);
  if (plrBust) {
    document.getElementById("msgtxt").innerHTML =
      handLabel() + ": " + plrSum + "<br>Bust!";
    // pause on the bust message before moving on to hand 2
    setTimeout(finishHand, splitActive && activeHand === 0 ? 1200 : 0);
  } else {
    showTurnMsg();
  }
}

function playerStand() {
  console.log(handLabel() + " stands on: " + plrSum);
  document.getElementById("msgtxt").textContent = handLabel() + " stands: " + plrSum;
  finishHand();
}

function playerDouble() {
  if (plrCardCount !== 2) {
    document.getElementById("msgtxt").innerHTML = "Double only on<br>first two cards";
    return;
  }
  if (plrbank < plrbet) {
    document.getElementById("msgtxt").textContent = "Not enough bank to double!";
    return;
  }
  plrbank -= plrbet;
  plrbet  *= 2;
  updateBetText();
  document.getElementById("txtbox01").textContent = "Bank: $" + plrbank;
  let card = drawPlayerCard();
  console.log(handLabel() + " doubles: " + card.rank + " | plrSum: " + plrSum);
  finishHand();
}

// Called when the active hand is done (stand, bust, or double).
// During a split, hand 1 finishing moves play to hand 2.
function finishHand() {
  if (splitActive && activeHand === 0) {
    startSplitHand();
    return;
  }
  // Player is done. Skip the dealer only if every hand busted.
  if (splitActive) {                               // show both hands at full brightness
    document.getElementById("PlayerField").style.opacity      = "1";
    document.getElementById("PlayerSplitField").style.opacity = "1";
  }
  const allBust = plrBust && (!splitActive || hand0.bust);
  gameState = allBust ? "eval" : "dealerTurn";
  gameLoop();
}

// ═══════════════════════════════════════════════════════
//  DEALER TURN
// ═══════════════════════════════════════════════════════
function dealerTurn() {
  // Reveal hole card
  let dlrCard1 = document.getElementById("DealerCrd01");
  dlrCard1.querySelector("img").src = dlrHand[0].crdsrc;
  dlrCard1.style.visibility = "visible";

  console.log("dealerTurn called — dlrSum: " + dlrSum);

  // Dealer draws to 16, stands on 17+
  while (dlrSum < 17) {
    let card = pullcard();
    aceCheck(card, 1);
    dlrSum += card.crdval;
    bustCheck(1);
    dlrCardCount++;
    let cardDiv = document.getElementById("DealerCrd0" + dlrCardCount);
    if (cardDiv) {
      cardDiv.querySelector("img").src = card.crdsrc;
      cardDiv.style.visibility = "visible";
    }
    console.log("Dealer draws: " + card.rank + " | dlrSum: " + dlrSum);
  }

  if (dlrSum > 21) { dlrBust = true; }
  gameState = "eval";
  gameLoop();
}

// ═══════════════════════════════════════════════════════
//  EVAL HAND
// ═══════════════════════════════════════════════════════
function evalHand() {
  console.log("evalHand called");
  let msg = "";

  // Always turn the hole card over so the player sees what beat them
  document.getElementById("DealerCrd01").querySelector("img").src = dlrHand[0].crdsrc;

  if (splitActive) {
    // Dealer BJ / player BJ can't happen here — those end the round at the deal,
    // and 21 on a split hand pays 1:1, not 3:2.
    const r1 = settle(hand0.sum, hand0.bust, hand0.bet);
    const r2 = settle(plrSum,    plrBust,    plrbet);
    msg = "Hand 1: " + r1 + "<br>Hand 2: " + r2;
  } else if (plrBust) {
    msg = "Bust!<br>Dealer wins.";
  } else if (dlrBust) {
    msg = "Dealer busts!<br>You win!";
    plrbank += plrbet * 2;
  } else if (plrBJ && dlrBJ) {
    msg = "Push — both Blackjack!";
    plrbank += plrbet;
  } else if (dlrBJ) {
    msg = "Dealer Blackjack!<br>Dealer wins.";
  } else if (plrBJ) {
    msg = "Blackjack!<br>You win 3:2!";
    plrbank += Math.floor(plrbet * 2.5);
  } else if (plrSum > dlrSum) {
    msg = "You win!";
    plrbank += plrbet * 2;
  } else if (dlrSum > plrSum) {
    msg = "Dealer wins.";
  } else {
    msg = "Push!";
    plrbank += plrbet;
  }

  document.getElementById("msgtxt").innerHTML      = msg;
  document.getElementById("txtbox01").textContent  = "Bank: $" + plrbank;
  console.log("Result: " + msg + " | Bank: $" + plrbank);
  // Manual break between hands. 
  document.getElementById("btnNew").querySelector("img").src = "img/newhand.png";
document.getElementById("btnStand").style.visibility = "hidden";
document.getElementById("btnNew").style.visibility = "visible";
document.getElementById("btnNew").onclick = function() {
    gameState = "cleanup";
gameLoop(); }; 
  

  /* Auto cleanup after 3 seconds (a little longer for two results)
  setTimeout(() => {
    gameState = "cleanup";
    gameLoop();
  }, splitActive ? 4000 : 3000); */
}

// Settle one split hand against the dealer. Adjusts plrbank, returns a word.
function settle(sum, bust, bet) {
  if (bust)                       return "Bust";
  if (dlrBust || sum > dlrSum)  { plrbank += bet * 2; return "Win $" + bet; }
  if (sum === dlrSum)           { plrbank += bet;     return "Push"; }
  return "Lose";
}

// ═══════════════════════════════════════════════════════
//  CLEANUP
// ═══════════════════════════════════════════════════════
function cleanup() {
  plrBJ        = false; dlrBJ        = false;
  plrBust      = false; dlrBust      = false;
  plrSum       = 0;     dlrSum       = 0;
  plrAceCount  = 0;     dlrAceCount  = 0;
  plrbet       = 0;     currentBet   = 0;
  betLocked    = false;
  plrCardCount = 2;     dlrCardCount = 2;
  plrHand      = [];    dlrHand      = [];
  // split reset
  splitActive  = false; activeHand   = 0;
  waitCard     = null;  splitAces    = false;
  baseBet      = 0;     hand0        = null;
  slotPrefix   = "PlayerCrd0";
  document.getElementById("mychips").style.visibility = "hidden";
  document.getElementById("betTxt").textContent = "";
  console.clear();
  console.log("cleanup called — ready for new hand");
  console.log(deck.cards.length + " Cards Remain");
  newhand();
}

// ═══════════════════════════════════════════════════════
//  SPLIT HAND
//  1. splitHand()      — checks the pair, takes the 2nd bet, moves card 2
//                        to the split field, deals hand 1 its second card
//  2. hand 1 is played with the normal Hit / Stand / Double buttons
//  3. startSplitHand() — (via finishHand) saves hand 1, loads hand 2,
//                        deals its second card
//  4. hand 2 is played, then finishHand() sends it to the dealer
//  5. evalHand() settles each hand on its own
// ═══════════════════════════════════════════════════════
function splitHand() {
  const msg = document.getElementById("msgtxt");
  if (splitActive || plrCardCount !== 2) {
    msg.innerHTML = "Split only on<br>your first two cards";
    return;
  }
  if (plrHand[0].crdval !== plrHand[1].crdval) {     // 10-J-Q-K count as a pair
    msg.innerHTML = "Need a pair<br>to split";
    return;
  } 
  if (plrbank < plrbet) {
    msg.textContent = "Not enough bank to split!";
    return;
  }

  // Second bet, same size as the first
  plrbank    -= plrbet;
  baseBet     = plrbet;
  splitActive = true;
  activeHand  = 0;
  splitAces   = plrHand[0].rank === 'Ace';
  updateBetText();
  document.getElementById("txtbox01").textContent = "Bank: $" + plrbank;

  // Move card 2 into the split field
  let splitCard = plrHand.pop();
  document.getElementById("PlayerCrd02").style.visibility = "hidden";
  let sDiv = document.getElementById("PlayerSCrd01");
  sDiv.querySelector("img").src = splitCard.crdsrc;
  sDiv.style.visibility = "visible";
  document.getElementById("PlayerField").style.left = "130px";
  document.getElementById("PlayerSplitField").style.visibility = "visible";

  // Right-hand (split) field plays first — park the main card, deal to the split card
  waitCard = plrHand[0];
  loadSingleCardHand(splitCard);
  slotPrefix = "PlayerSCrd0";
  drawPlayerCard();
  highlightActiveHand();
  console.log("Split! Hand 1: " + plrSum + " | waiting: " + waitCard.rank);

  if (splitAces) {                    // split aces: one card each, no more play
    setTimeout(finishHand, 1000);
    return;
  }
  showTurnMsg();
}

function startSplitHand() {
  hand0 = { sum: plrSum, bust: plrBust, bet: plrbet };
  console.log("Hand 1 done: " + JSON.stringify(hand0));

  activeHand = 1;
  plrbet     = baseBet;               // hand 1 may have doubled; hand 2 starts fresh
  slotPrefix = "PlayerCrd0";          // now the main (left) hand
  loadSingleCardHand(waitCard);
  waitCard   = null;
  drawPlayerCard();
  highlightActiveHand();
  console.log("Hand 2 starts: " + plrSum);

  if (splitAces) {
    setTimeout(finishHand, 1000);
    return;
  }
  showTurnMsg();
}

// Reset the active-hand globals to a hand holding just one card
function loadSingleCardHand(card) {
  plrHand      = [card];
  plrSum       = card.crdval;
  plrAceCount  = 0;
  aceCheck(card, 0);
  plrBust      = false;
  plrCardCount = 1;
}

// Dim the hand that isn't being played
function highlightActiveHand() {
  document.getElementById("PlayerSplitField").style.opacity = activeHand === 0 ? "1" : "0.55";
  document.getElementById("PlayerField").style.opacity      = activeHand === 1 ? "1" : "0.55";
}

// Put the player field back where it lives and hide the split field
function resetSplitLayout() {
  const pf = document.getElementById("PlayerField");
  pf.style.left    = "360px";
  pf.style.opacity = "1";
  document.getElementById("PlayerSplitField").style.visibility = "hidden";
  document.getElementById("PlayerSplitField").style.opacity    = "1";
}

// Bet label next to the circle: "$10", or "$10 + $10" after a split
function updateBetText() {
  let txt;
  if (!splitActive)          txt = "$" + plrbet;
  else if (activeHand === 0) txt = "$" + plrbet + " + $" + baseBet;
  else                       txt = "$" + hand0.bet + " + $" + plrbet;
  document.getElementById("betTxt").textContent = txt;
}

function standbtnTest() {
  console.log("Stand Button Clicked");
}
