import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
export * from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const db=getFirestore(initializeApp({
  apiKey:"AIzaSyAw37kIe6uY1CX_PbiHxahQTJT1dIbQRbk",
  authDomain:"thanksgiving-2026-834ae.firebaseapp.com",
  projectId:"thanksgiving-2026-834ae",
  storageBucket:"thanksgiving-2026-834ae.firebasestorage.app",
  messagingSenderId:"33287573835",
  appId:"1:33287573835:web:75f2a5b34d98387b6918ce"
}));

// ===== EDIT BELOW =====
export const HOST_PIN="1234";   // change this to your 4-digit PIN
export const HINT_WAIT=120;     // seconds between hints

// Each place gets one QR code. The place key (e.g. "clock") is also its typed backup code.
// "img" or "audio" points to the clue file in the clues folder. "clue" is optional text shown with it.
// Hints are placeholders: replace them with your own.
export const PLACES={
 clock:{img:"clues/clock.png",clue:"",hints:["Look closely at the picture.","Think about where you would see this inside the house.","The answer is the clock."]},
 deck:{audio:"clues/deck.wav",clue:"Listen closely.",hints:["Listen again, and listen carefully.","Think about the outdoors.","The answer is under the deck."]},
 spout:{img:"clues/spout.png",clue:"",hints:["Look closely at the picture.","Think about where water comes out.","The answer is the water spout."]},
 billiards:{audio:"clues/billiards.wav",clue:"Listen closely.",hints:["Listen again, and listen carefully.","Think about a game you play with a cue.","The answer is the billiards table."]},
 woodshed:{img:"clues/woodshed.jpg",clue:"",hints:["Look closely at the picture.","Think about where logs are kept.","The answer is the woodshed."]},
 fridge:{img:"clues/fridge.jpg",clue:"",hints:["Look closely at the picture.","Think about the kitchen.","The answer is the refrigerator."]},
 oliveoil:{img:"clues/oliveoil.jpg",clue:"",hints:["Look closely at the picture.","Think about cooking.","The answer is the olive oil."]},
 gate:{audio:"clues/gate.wav",clue:"Listen closely.",hints:["Listen again, and listen carefully.","Think about trains.","The answer is the crossing gate."]}
};
// Team login code -> name and the order of places (the last one is where that team finishes).
// Each team is offset around the same circle, so no two teams are ever at the same place at the same step.
const ALL=["clock","deck","spout","billiards","woodshed","fridge","oliveoil","gate"];
const spin=n=>ALL.slice(n).concat(ALL.slice(0,n));
export const TEAMS={
 owl:{name:"Owls",route:spin(0)},
 fox:{name:"Foxes",route:spin(2)},
 bear:{name:"Bears",route:spin(3)},
 wolf:{name:"Wolves",route:spin(5)},
 hawk:{name:"Hawks",route:spin(6)}
};
