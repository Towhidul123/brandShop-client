// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPtzUJk2u6rovvSWjWQV-8-R0Gd7QHTps",
  authDomain: "ass-10-62d1c.firebaseapp.com",
  projectId: "ass-10-62d1c",
  storageBucket: "ass-10-62d1c.appspot.com",
  messagingSenderId: "82649255963",
  appId: "1:82649255963:web:4afcff6206e21746e528be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;


