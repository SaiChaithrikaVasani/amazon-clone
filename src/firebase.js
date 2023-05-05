import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfwdyqkl_gZjJwm1L4HRoEFCnAz5eOuZk",
  authDomain: "clone-693b5.firebaseapp.com",
  projectId: "clone-693b5",
  storageBucket: "clone-693b5.appspot.com",
  messagingSenderId: "765365097255",
  appId: "1:765365097255:web:251dab367ebc4a52254f02",
  measurementId: "G-NWHPQFFSND"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
