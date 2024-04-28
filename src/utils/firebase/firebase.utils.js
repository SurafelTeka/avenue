import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV47anekzQjThE1uyBnA40KzNqiOZqQDQ",

  authDomain: "avenue-db.firebaseapp.com",

  projectId: "avenue-db",

  storageBucket: "avenue-db.appspot.com",

  messagingSenderId: "773122217389",

  appId: "1:773122217389:web:c99a1f23222f2f6fedbd24",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
