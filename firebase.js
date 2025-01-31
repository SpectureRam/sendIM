// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth to manage authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPgLeytNm9e4_S0bBoDNKycgHGbHwOyjY",
  authDomain: "sendim-a98e3.firebaseapp.com",
  projectId: "sendim-a98e3",
  storageBucket: "sendim-a98e3.firebasestorage.app",
  messagingSenderId: "452850114384",
  appId: "1:452850114384:web:2150070957874de9429655",
  measurementId: "G-V4LYZYR09M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

// Optionally, initialize analytics
const analytics = getAnalytics(app);

// Export auth so that you can use it in other files
export { auth };