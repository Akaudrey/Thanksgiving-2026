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

// Each place gets one QR code. The place's key (e.g. "woods") is also its typed backup code.
export const PLACES={
 mailbox:{clue:"I swallow letters but never speak. Find where the postman stops.",hints:["Think outside, near the street.","It often has a little flag on the side.","Check the mailbox!"]},
 fridge:{clue:"Cold on the inside, covered in magnets outside. Your next stop keeps something cool.",hints:["Think kitchen.","It hums quietly.","Look at the fridge!"]},
 woods:{clue:"Where the trees stand close and the path turns to leaves.",hints:["Head to the back of the property.","Look for the biggest tree.","Check the edge of the woods!"]},
 garage:{clue:"Wheels sleep here when they are not going anywhere.",hints:["Think big doors.","Where the car or bikes live.","Check inside the garage!"]},
 bench:{clue:"Rest your legs, then rest your eyes on what is underneath.",hints:["Somewhere to sit outside.","Wooden, probably.","Look under the bench!"]}
};
// Team login code -> name and the order of places (last one is the finish).
export const TEAMS={
 owl:{name:"Owls",route:["mailbox","fridge","woods","garage","bench"]},
 fox:{name:"Foxes",route:["fridge","woods","garage","bench","mailbox"]},
 bear:{name:"Bears",route:["woods","garage","bench","mailbox","fridge"]},
 wolf:{name:"Wolves",route:["garage","bench","mailbox","fridge","woods"]},
 hawk:{name:"Hawks",route:["bench","mailbox","fridge","woods","garage"]}
};
