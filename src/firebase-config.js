import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyB1SzbyMxRRN82FJyDEHAjPMtfIlG_fbsY",
    authDomain: "authentication-60046.firebaseapp.com",
    projectId: "authentication-60046",
    storageBucket: "authentication-60046.appspot.com",
    messagingSenderId: "556429763408",
    appId: "1:556429763408:web:cc98772e5f8e50523b0255",
    measurementId: "G-ZCS2TP6711"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export const signInWithGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const photo = result.user.photoURL;


        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("photo",photo);
    })
    .catch((error)=>{
        console.log(error);
    })
  }