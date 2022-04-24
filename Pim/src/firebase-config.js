import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuf1-S3PllqYCw9-Enm17b3g4cCIrRBh0",
  authDomain: "authentification-78064.firebaseapp.com",
  projectId: "authentification-78064",
  storageBucket: "authentification-78064.appspot.com",
  messagingSenderId: "183575350988",
  appId: "1:183575350988:web:16e924f5b033090c147c69",
  measurementId: "G-E40EQ9Y29S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
