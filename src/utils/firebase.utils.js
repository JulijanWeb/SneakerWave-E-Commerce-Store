import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhS7SdZly1VDy9N_0HMKzd3F1zAkXK4vY",
  authDomain: "sneakerwave-db.firebaseapp.com",
  projectId: "sneakerwave-db",
  storageBucket: "sneakerwave-db.appspot.com",
  messagingSenderId: "687697296646",
  appId: "1:687697296646:web:fe5a6e196b31eacb15f287",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
