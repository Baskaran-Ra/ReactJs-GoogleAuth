
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFiYyglWyqAOcW5AQTUlDQTxCx0l02wak",
  authDomain: "charismatic-age-372110.firebaseapp.com",
  projectId: "charismatic-age-372110",
  storageBucket: "charismatic-age-372110.appspot.com",
  messagingSenderId: "29021198630",
  appId: "1:29021198630:web:ae29b08742088ca38089e7",
  measurementId: "G-Q81R1VVPJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);