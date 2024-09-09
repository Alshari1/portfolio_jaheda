
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBO1-sWQ85_m30pdqW1fap2ssi8ZgL4JmY",
  authDomain: "portfolio-jaheda.firebaseapp.com",
  projectId: "portfolio-jaheda",
  storageBucket: "portfolio-jaheda.appspot.com",
  messagingSenderId: "588151426402",
  appId: "1:588151426402:web:600f2e46e53f343c9f303b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;