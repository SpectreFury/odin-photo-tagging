// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_p8O6nKm9ff4x2GdH1Q3xE7AFQud_d2E",
  authDomain: "odin-photo-tagging-app-eb30a.firebaseapp.com",
  projectId: "odin-photo-tagging-app-eb30a",
  storageBucket: "odin-photo-tagging-app-eb30a.appspot.com",
  messagingSenderId: "228912239985",
  appId: "1:228912239985:web:460118db165cb07c04d2d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
