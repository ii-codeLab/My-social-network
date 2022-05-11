import { getAuth, GoogleAuthProvider, signInWithPopup } from './Firebase.js'; 
//import { onNavigate } from '../main.js';
import instApp from './FirebaseConfiguration.js';

instApp();
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function loginGoogle(){
    let results;
    await signInWithPopup(auth, provider)
      .then((result) => {
        results = result;
      })
      .catch((error) => {
        const errorMsg = error.message;
        results = false;
      });
    return results;
}