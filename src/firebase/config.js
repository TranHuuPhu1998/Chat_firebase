import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAJb9e4p4bZNcDAKnIOGbURPiUM-LgWSh4",
    authDomain: "chat-app-d5e2c.firebaseapp.com",
    projectId: "chat-app-d5e2c",
    storageBucket: "chat-app-d5e2c.appspot.com",
    messagingSenderId: "705454859785",
    appId: "1:705454859785:web:5958bb84ed65d5ab5d7ad8",
    measurementId: "G-TPQSLV7DD7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
auth.useEmulator('http://localhost:9099');

if(window.location.hostname === 'localhost'){
    db.useEmulator('localhost','8080');
   
}

export {db , auth};
export default firebase;