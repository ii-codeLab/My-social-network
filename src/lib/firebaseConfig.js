// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkRD5a2R7WHSA1xL8rXnvlIUekhpuspqY",
  authDomain: "abstractsocialnetwork.firebaseapp.com",
  projectId: "abstractsocialnetwork",
  storageBucket: "abstractsocialnetwork.appspot.com",
  messagingSenderId: "420525000671",
  appId: "1:420525000671:web:dadd1dd4654521253b666a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

// crear función export addNote, con texto como parámetro
// Mandar a llamar como parámetro imputPost en home 

export function addNote (text){
  console.log(text);
}