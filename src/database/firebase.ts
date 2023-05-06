import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDx5aoWCoCFxcqGbjlh_B8B2N-r16zClQ",
  authDomain: "chat-application-caee9.firebaseapp.com",
  projectId: "chat-application-caee9",
  storageBucket: "chat-application-caee9.appspot.com",
  messagingSenderId: "79642251967",
  appId: "1:79642251967:web:80e76ae7c31ec2ca8eac0a",
  measurementId: "G-MQV5BEBS0J",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth();
