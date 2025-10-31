// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZVZD1pMlNum7i5U5F6RipgT8Nie_0xew",
  authDomain: "smart-deals-6ccb3.firebaseapp.com",
  projectId: "smart-deals-6ccb3",
  storageBucket: "smart-deals-6ccb3.firebasestorage.app",
  messagingSenderId: "831540588317",
  appId: "1:831540588317:web:e18b97deee254f0070fbf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)