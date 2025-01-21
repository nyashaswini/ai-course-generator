// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-dd1c5.firebaseapp.com",
  projectId: "ai-course-generator-dd1c5",
  storageBucket: "ai-course-generator-dd1c5.firebasestorage.app",
  messagingSenderId: "238788496784",
  appId: "1:238788496784:web:8a270210ba385183e17715",
  measurementId: "G-SWBJEMV80W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)