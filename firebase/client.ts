// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDPRiRf_XyBnEKxSY1zSUxnbDiEIp7foE",
  authDomain: "careercatalyst-42305.firebaseapp.com",
  projectId: "careercatalyst-42305",
  storageBucket: "careercatalyst-42305.firebasestorage.app",
  messagingSenderId: "587155533141",
  appId: "1:587155533141:web:4f4c0f47f6a4a487d353dc",
  measurementId: "G-GGJENDJL7E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);