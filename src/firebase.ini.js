// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvc2xgnXyc51OAAgEM1w0Jo8BF4TcUacw",
  authDomain: "ema-john-privet-routing.firebaseapp.com",
  projectId: "ema-john-privet-routing",
  storageBucket: "ema-john-privet-routing.appspot.com",
  messagingSenderId: "135506064896",
  appId: "1:135506064896:web:d026017d835cfa3277cae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;