// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmS34oUSe4aMCwD77OUxeKxD9iYR1jC9M",
  authDomain: "my-library-495db.firebaseapp.com",
  projectId: "my-library-495db",
  storageBucket: "my-library-495db.appspot.com",
  messagingSenderId: "703482611193",
  appId: "1:703482611193:web:48d9d9cf0e2fcb8435a928",
  measurementId: "G-B4FG9RY5D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);