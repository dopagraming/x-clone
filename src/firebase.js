import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCmzHk65wmZ55WqMKublsZYs9_DP6jGPtE",
    authDomain: "x-clone-cb23d.firebaseapp.com",
    projectId: "x-clone-cb23d",
    storageBucket: "x-clone-cb23d.firebasestorage.app",
    messagingSenderId: "853497612515",
    appId: "1:853497612515:web:836c7db2da0c63e8685dd6",
    measurementId: "G-L838QJ4V14"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, db, storage }