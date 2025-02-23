import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCQ-wlPmdqJqrrN87vW6WU6VyNFsQN1nbE",
  authDomain: "moshpital-96f7c.firebaseapp.com",
  projectId: "moshpital-96f7c",
  storageBucket: "moshpital-96f7c.appspot.com",
  messagingSenderId: "1003659774268",
  appId: "1:1003659774268:web:228f1b4af472a8cc26b639",
  measurementId: "G-7BSZEL7W5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
