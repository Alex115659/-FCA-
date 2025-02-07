import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwOIiwDeF5PFT-QPgVNsGiw0s3ciaTnQY",
  authDomain: "code-academy-b5a51.firebaseapp.com",
  projectId: "code-academy-b5a51",
  storageBucket: "code-academy-b5a51.firebasestorage.app",
  messagingSenderId: "112652321738",
  appId: "1:112652321738:web:d18fb7b7bad27e9b728533",
  measurementId: "G-NZE3VYK2BD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)