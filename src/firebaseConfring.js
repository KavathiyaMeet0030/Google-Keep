// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLeP5wIiFsCEYYcTlTzOocMNlYKvg6bc",
  authDomain: "keep-project-31f76.firebaseapp.com",
  projectId: "keep-project-31f76",
  storageBucket: "keep-project-31f76.appspot.com",
  messagingSenderId: "16566058794",
  appId: "1:16566058794:web:7907a55d558c65c55da853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app) 