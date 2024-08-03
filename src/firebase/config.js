import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBUOcTtGNa7zR1xP0p_NhyAclPiuKmOfCc",
    authDomain: "proyectoescuela-35741.firebaseapp.com",
    projectId: "proyectoescuela-35741",
    storageBucket: "proyectoescuela-35741.appspot.com",
    messagingSenderId: "466831080196",
    appId: "1:466831080196:web:7cfec92398647c12f16e51"
};

const app = initializeApp(firebaseConfig);
export const FireBaseDB = getFirestore(app);