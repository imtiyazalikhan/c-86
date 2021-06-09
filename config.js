import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC0XTETgK_GpigkEP3WQxbeyLNDcuuZ4uQ",
    authDomain: "book-santa-cab88.firebaseapp.com",
    databaseURL: "https://book-santa-cab88.firebaseio.com",
    projectId: "book-santa-cab88",
    storageBucket: "book-santa-cab88.appspot.com",
    messagingSenderId: "371570829654",
    appId: "1:371570829654:web:16c0a3fd44e3ffd6230ef7"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();