// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyBzvgEWohWF3idaUGNr84jFsJjjYKqtyec",
    authDomain: "hera-spa.firebaseapp.com",
    databaseURL: "https://hera-spa-default-rtdb.firebaseio.com",
    projectId: "hera-spa",
    storageBucket: "hera-spa.appspot.com",
    messagingSenderId: "776252061727",
    appId: "1:776252061727:web:936af0f28b43db424e3d2a",
    measurementId: "G-H0BSPC3PGT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();