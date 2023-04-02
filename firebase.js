// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF9eC_UlUnnSBcmN78WME_IbArYtDNy6U",
  authDomain: "insta-clone-b7f69.firebaseapp.com",
  projectId: "insta-clone-b7f69",
  storageBucket: "insta-clone-b7f69.appspot.com",
  messagingSenderId: "759615710560",
  appId: "1:759615710560:web:ebfe783531f2b70b222a05"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};