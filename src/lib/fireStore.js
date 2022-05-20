import { getFirestore, collection, addDoc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { app } from '../lib/firebaseConfig.js';
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add a new document with a generated id.
export const addPost = async (text)=>{
 await addDoc(collection(db, 'text'), {text})
    console.log(text);

  //console.log('Document written with ID: ', addPost.id);
}

const q = query(collection(db, "text"), where("text", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
