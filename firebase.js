// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARZZm2V2KiL7dSd41GiMT-Pby-L8AskAA",
  authDomain: "ai-resume-analyzer-8f5a3.firebaseapp.com",
  projectId: "ai-resume-analyzer-8f5a3",
  storageBucket: "ai-resume-analyzer-8f5a3.firebasestorage.app",
  messagingSenderId: "699454379938",
  appId: "1:699454379938:web:616c348d0c3d5fefbac4fb",
  measurementId: "G-KM4BW2M8VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);