import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD974qWRDz58dHn3ziQDkzUWG7T7bplOUE",
  authDomain: "netflix-5c318.firebaseapp.com",
  projectId: "netflix-5c318",
  storageBucket: "netflix-5c318.appspot.com",
  messagingSenderId: "418982682552",
  appId: "1:418982682552:web:28cfec08d1a0e6c0ae794d",
  measurementId: "G-8FQM4DHJMY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
