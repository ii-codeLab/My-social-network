import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();
const auth = getAuth()
// Add a new document with a generated id.
export const addPost = (text)=>
  addDoc(collection(db, 'text'), {text, email: auth.currentUser.email});

  //console.log('Document written with ID: ', addPost.id);
export const getPost = () => getDocs(collection(db, 'text'));

export const onGetPosts = (callback) => onSnapshot(collection(db, 'text'), callback);
