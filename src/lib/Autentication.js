import { getAuth, 
    GoogleAuthProvider, 
    signInWithRedirect,
    getRedirectResult,
 } from './Firebase.js'; 
//import { onNavigate } from '../main.js';
import instApp from './FirebaseConfiguration.js';

instApp();
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function loginGoogle(){
//-------------- Accede con el redireccionamiento a la página de acceso ---------------------------
    await signInWithRedirect(auth, provider);

//-------------- Recupera el token de OAuth del proveedor de Google ---------------------------
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}