// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Firebase_KEY,
  authDomain: "bazar-75bf4.firebaseapp.com",
  projectId: "bazar-75bf4",
  storageBucket: "bazar-75bf4.appspot.com",
  messagingSenderId: "617519812679",
  appId: "1:617519812679:web:656030c5c8d4e17598e162"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
