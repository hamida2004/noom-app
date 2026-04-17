import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCstlYVlqvOmq-wkc_Rev6159Qi2g-VwWQ",
  authDomain: "noom-c5c62.firebaseapp.com",
  databaseURL: "https://noom-c5c62-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "noom-c5c62",
  storageBucket: "noom-c5c62.appspot.com",
  messagingSenderId: "872354733492",
  appId: "1:872354733492:web:2a5e783e67180c8f9726e1"
};

// Initialize only once
const app = initializeApp(firebaseConfig);
// تصدير الخدمات
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDB = getDatabase(app);