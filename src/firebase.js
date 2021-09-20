import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxxprae53GmzWIEetxedxvK9gj-1cVwAM",
  authDomain: "clone-1725f.firebaseapp.com",
  projectId: "clone-1725f",
  storageBucket: "clone-1725f.appspot.com",
  messagingSenderId: "1004852724943",
  appId: "1:1004852724943:web:8f03d4d0832bcb47f023ba",
  measurementId: "G-KZF6YN1VMB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
