import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add a new document with a generated id.
export const addPost = async (text)=>{
 await addDoc(collection(db, 'text'), {text})
    console.log(text, 'carlos');

  //console.log('Document written with ID: ', addPost.id);
}


