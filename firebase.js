import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBnnc0aZ1G084XQPmNBJXIdlSBt49oKLYE",
    authDomain: "facebook-2dd3a.firebaseapp.com",
    projectId: "facebook-2dd3a",
    storageBucket: "facebook-2dd3a.appspot.com",
    messagingSenderId: "1017318874658",
    appId: "1:1017318874658:web:e19b0084c8f27a7b20b47b",
    measurementId: "G-2H8M7STKHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDoc,
    doc,
    onAuthStateChanged
}