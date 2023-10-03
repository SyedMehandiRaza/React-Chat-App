import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4LyPF-eRk_ezPu2ml1q3IyfTXo6-K8rY",
  authDomain: "chat-d15bc.firebaseapp.com",
  projectId: "chat-d15bc",
  storageBucket: "chat-d15bc.appspot.com",
  messagingSenderId: "645599006563",
  appId: "1:645599006563:web:94488009f92b479da38d56",
  measurementId: "G-ZMXLJPH6X2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
