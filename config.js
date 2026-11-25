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
export const HINT_WAIT=180;     // seconds between hints

// Each place gets one QR code. Its 8-digit number (see CODES below) is also the typed backup code.
// "img" or "audio" points to the clue file in the clues folder. "clue" is optional text shown with it.
// A video clue uses a YouTube link, for example:  video:"https://youtu.be/XXXXXXXXXXX"
// Hints are placeholders: replace them with your own.
export const PLACES={
 clock:{img:"clues/clock.png",clue:"",hints:["Finish the rhyme", "It’s not digital"]},
 deck:{audio:"clues/deck.wav",clue:"Listen closely.",hints:["Crack the code", "..- = U"]},
 spout:{img:"clues/spout.png",clue:"",hints:["How big is the spider?", "It’s itsy bitsy"]},
 billiards:{audio:"clues/billiards.wav",clue:"Listen closely.",hints:["Where would that sound come from", "Check the balls"]},
 woodshed:{img:"clues/woodshed.jpg",clue:"",hints:["Say it out loud", "Say it fast", "Try saying “Whoosh” instead of “Watch”"]},
 fridge:{img:"clues/fridge.jpg",clue:"",hints:["One word", "Rearrange the letters", "It’s in the house"]},
 oliveoil:{img:"clues/oliveoil.jpg",clue:"",hints:["Not Popeye", "Who’s the girl", "Find it in the house"]},
 gate:{audio:"clues/gate.wav",clue:"Listen closely.",hints:["Hit the road", "Follow the sound", "Check the gate"]},
 tractor:{video:"https://www.youtube.com/watch?v=b4Q_Iz5LUV8",clue:"Watch closely.",hints:["John Deere", "The John Deere lives in the pole barn", "Look carefully, it’s hidden on the tractor"]},
 hoop:{img:"clues/hoop.jpg",clue:"",hints:["Not the ball", "Check the hoop"]},
 miscanthus:{img:"clues/miscanthus.jpg",clue:"",hints:["The clue is hidden in the miscanthus", "Check the southeast corner"]},
 mailbox:{img:"clues/mailbox.jpg",clue:"",hints:["Go back and re-scan the codes if you need to, but no need to go back to the railroad tracks"]}
};

// Random 8-digit code for each place. The QR codes and the typed backup both use these.
export const CODES={
 clock:"93437778",
 deck:"79697937",
 spout:"98899704",
 billiards:"38471178",
 woodshed:"69847870",
 fridge:"62465284",
 oliveoil:"36851824",
 gate:"22760756",
 tractor:"92508234",
 hoop:"72824363",
 miscanthus:"40465840",
 mailbox:"93838129"
};
export const BYCODE=Object.fromEntries(Object.entries(CODES).map(([k,v])=>[v,k]));

// Letters that pop up when a team scans a place (and again if they rescan it later).
// None at the crossing gate, since it is the farthest from the house. X comes at the miscanthus.
export const LETTERS={deck:"B",fridge:"O",woodshed:"L",oliveoil:"I",clock:"A",hoop:"M",miscanthus:"X"};

// Team login code -> default name (teams pick their own) and the order of places.
// Every team visits the same ten middle places, starting at a different point around the circle,
// and then all teams finish with the miscanthus and the mailbox.
const MID=["clock","deck","spout","billiards","woodshed","fridge","oliveoil","gate","tractor","hoop"];
const END=["miscanthus","mailbox"];
const spin=n=>MID.slice(n).concat(MID.slice(0,n)).concat(END);
export const TEAMS={
 team1:{name:"Team #1",route:spin(0)},
 team2:{name:"Team #2",route:spin(2)},
 team3:{name:"Team #3",route:spin(5)},
 team4:{name:"Team #4",route:spin(7)}
};
