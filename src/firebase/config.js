// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEjgQphRXG_UJjspf2d8_h4rhiAN39n0",
  authDomain: "my-backend-2023.firebaseapp.com",
  projectId: "my-backend-2023",
  storageBucket: "my-backend-2023.appspot.com",
  messagingSenderId: "483477297212",
  appId: "1:483477297212:web:57410e588668b1ed4f0b39",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
