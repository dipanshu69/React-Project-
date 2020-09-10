import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDr9VW4fngtbFH8rZSvb-vJUaxq1qHfQn0",
  authDomain: "clothing-db-e40b7.firebaseapp.com",
  databaseURL: "https://clothing-db-e40b7.firebaseio.com",
  projectId: "clothing-db-e40b7",
  storageBucket: "clothing-db-e40b7.appspot.com",
  messagingSenderId: "67710310828",
  appId: "1:67710310828:web:b5229a0bb1d088f45f0209",
  measurementId: "G-FHQ91FMQ50"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
