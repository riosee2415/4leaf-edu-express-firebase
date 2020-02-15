import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDFMfPzJjhlK5k5DysfRbwbmf4GoX14jAk",
  authDomain: "edu-4leaf.firebaseapp.com",
  databaseURL: "https://edu-4leaf.firebaseio.com",
  projectId: "edu-4leaf",
  storageBucket: "edu-4leaf.appspot.com",
  messagingSenderId: "908580629252",
  appId: "1:908580629252:web:7f64604740c06b6b877e51",
  measurementId: "G-9ZSM4TE70P"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
