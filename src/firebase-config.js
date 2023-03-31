// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACjdR1U9ZVjcNF-XviLyWJNPcRITFjchE",
  authDomain: "simpleblog-3ea75.firebaseapp.com",
  projectId: "simpleblog-3ea75",
  storageBucket: "simpleblog-3ea75.appspot.com",
  messagingSenderId: "657895661826",
  appId: "1:657895661826:web:3c31a42f715c4f3198221b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()