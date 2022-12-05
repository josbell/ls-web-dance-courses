// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY27-9twFN12_b5NDTpvVpMBelVHkCz-E",
  authDomain: "ls-web-dance-courses.firebaseapp.com",
  projectId: "ls-web-dance-courses",
  storageBucket: "ls-web-dance-courses.appspot.com",
  messagingSenderId: "741227594997",
  appId: "1:741227594997:web:c528e6b91b3846b75231bc",
  measurementId: "G-DN169CFRK3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const signInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      return [user, token];
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const { email } = error.customData;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      return { errorCode, errorMessage };
    });
};

export const { signOut } = getAuth();
export const realTimeDb = { getStorage };
export const bucketDB = { getFirestore };
