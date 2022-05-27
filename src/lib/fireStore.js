import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();
export const auth = getAuth()


// Add a new document with a generated id.
export const addPost = (text)=>
  addDoc(collection(db, 'text'), {text, email: auth.currentUser.email, displayName: auth.currentUser.displayName});

  //console.log('Document written with ID: ', addPost.id);
export const getPost = () => getDocs(collection(db, 'text'));

export const onGetPosts = (callback) => onSnapshot(collection(db, 'text'), callback);

export const deletePost = id => deleteDoc(doc(db, 'text', id));
