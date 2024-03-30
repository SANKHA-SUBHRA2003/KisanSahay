// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIdNi_zy7RtC22SaA8hWfBUd40mNCA2vY",
  authDomain: "kisan-sahay.firebaseapp.com",
  projectId: "kisan-sahay",
  storageBucket: "kisan-sahay.appspot.com",
  messagingSenderId: "1067726330097",
  appId: "1:1067726330097:web:0d9fbec35f44feefe17150",
  measurementId: "G-TN1G486X3Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();
const analytics = getAnalytics(app);