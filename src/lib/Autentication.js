import { getAuth, 
    GoogleAuthProvider, 
    signInWithRedirect } from './Firebase.js'; 
import { onNavigate } from '../main.js';
import instApp from './FirebaseConfiguration.js';

instApp();
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithRedirect(auth, provider);
