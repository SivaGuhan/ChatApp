// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwpAzQuT7Sctay88-hphUhZAlex9dVqOo",
  authDomain: "chatapp-5e5b7.firebaseapp.com",
  projectId: "chatapp-5e5b7",
  storageBucket: "chatapp-5e5b7.appspot.com",
  messagingSenderId: "643126913565",
  appId: "1:643126913565:web:5cd3ccf577eebc9443f4f4",
  measurementId: "G-2PM8115X5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);


export {db,auth};