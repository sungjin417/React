import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhNDftFCG4TCNHCh_zlwEZVAemOLn_ZIE",
  authDomain: "photo-ex-9376d.firebaseapp.com",
  projectId: "photo-ex-9376d",
  storageBucket: "photo-ex-9376d.appspot.com",
  messagingSenderId: "257339324718",
  appId: "1:257339324718:web:651f66e453674dc26f22bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();