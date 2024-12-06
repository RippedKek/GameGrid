import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyDx_XtwKaYAkRQoBthtl34Zzhy6Ub63uZc",
  authDomain: "gamegrid-c1cc7.firebaseapp.com",
  projectId: "gamegrid-c1cc7",
  storageBucket: "gamegrid-c1cc7.firebasestorage.app",
  messagingSenderId: "252260238911",
  appId: "1:252260238911:web:33c0ef07631ec343ea5a8a",
  measurementId: "G-MZ63HQXTLE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { app, db };
