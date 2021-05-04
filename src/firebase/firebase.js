import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBZ9JXnhiv9-7DxKvJolni2TuCeyA_r4_I",
    authDomain: "week11-46223.firebaseapp.com",
    projectId: "week11-46223",
    storageBucket: "week11-46223.appspot.com",
    messagingSenderId: "445706952701",
    appId: "1:445706952701:web:110c95ebee738c9eb38394",
    measurementId: "G-12TBVTK0ML"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb