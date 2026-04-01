import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsUu39CmJjSNe77OA7aJLKtVpXRawBEvQ",
  authDomain: "mon-frigo-d3822.firebaseapp.com",
  projectId: "mon-frigo-d3822",
  storageBucket: "mon-frigo-d3822.firebasestorage.app",
  messagingSenderId: "761701540307",
  appId: "1:761701540307:web:5f09c00255067c33ac8f26"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
// Firestore(DB) 인스턴스 가져오기
export const db = getFirestore(app);