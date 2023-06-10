import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO63LwuGCvbXxTsAAh0BnwvmCAQDQcRMc",
  authDomain: "realtime-chat-6af3c.firebaseapp.com",
  projectId: "realtime-chat-6af3c",
  storageBucket: "realtime-chat-6af3c.appspot.com",
  messagingSenderId: "347162464980",
  appId: "1:347162464980:web:b94f0d96dc316f8ebbe141",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
