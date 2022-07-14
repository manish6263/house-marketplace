import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwa7xf7lzHuNjE4d_OjefqhQ3zk10lHFE",
    authDomain: "house-marketplace-app-ca8dd.firebaseapp.com",
    projectId: "house-marketplace-app-ca8dd",
    storageBucket: "house-marketplace-app-ca8dd.appspot.com",
    messagingSenderId: "682549571693",
    appId: "1:682549571693:web:300f5abb21be0d5804cf64"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();