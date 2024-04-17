// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBvhe8muPUpSmeB1B8TsLFnmtGgZ4bf9A",
  authDomain: "reactfirebase-7a5f0.firebaseapp.com",
  projectId: "reactfirebase-7a5f0",
  storageBucket: "reactfirebase-7a5f0.appspot.com",
  messagingSenderId: "263584874153",
  appId: "1:263584874153:web:be0117647c485ebed573b8",
  measurementId: "G-2ZL6CDGZMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);