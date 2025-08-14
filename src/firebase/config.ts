// src/firebase/config.ts
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOYWYn2Rpp1c8GWcP3klKIVQk-PpOBgaA",
  authDomain: "blest-shop.firebaseapp.com",
  projectId: "blest-shop",
  storageBucket: "blest-shop.firebasestorage.app",
  messagingSenderId: "1015180715560",
  appId: "1:1015180715560:web:3d6d80155ba09b2fc6371d",
  measurementId: "G-JW2SCDKP5X"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, analytics, auth, googleProvider }

