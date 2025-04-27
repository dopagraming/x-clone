import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDqbSLUVWV7Zyb_0YfTTJJOgw5YlaeqaSc",
    authDomain: "x-clone-cd813.firebaseapp.com",
    projectId: "x-clone-cd813",
    storageBucket: "x-clone-cd813.firebasestorage.app",
    messagingSenderId: "1080303374278",
    appId: "1:1080303374278:web:d1aa6d0d6a9ae94a80ecc7",
    measurementId: "G-NQ2HWYYQN9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, db, storage }