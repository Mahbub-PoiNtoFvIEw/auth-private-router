// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYslXIEVNWPbF40O_Vq00X2xehwZ8A1E4",
  authDomain: "auth-private-router-6ecc7.firebaseapp.com",
  projectId: "auth-private-router-6ecc7",
  storageBucket: "auth-private-router-6ecc7.firebasestorage.app",
  messagingSenderId: "1030252927552",
  appId: "1:1030252927552:web:f0f217554fbd9a4479dda5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;