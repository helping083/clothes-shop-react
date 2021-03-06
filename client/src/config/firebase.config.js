import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//todo: make auth into server
//todo: make google auth into our own server
//todo: make facebook and github auth
const firebaseConfig = {
    apiKey: "AIzaSyDB-8RJiLIRChfSl8f2lfqvobEv6KxL3T4",
    authDomain: "react-clothes-db-17250.firebaseapp.com",
    databaseURL: "https://react-clothes-db-17250.firebaseio.com",
    projectId: "react-clothes-db-17250",
    storageBucket: "react-clothes-db-17250.appspot.com",
    messagingSenderId: "223770877559",
    appId: "1:223770877559:web:3f2305da29ac15fb6fb072",
    measurementId: "G-4EGGTD7F6G"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  export default firebase;