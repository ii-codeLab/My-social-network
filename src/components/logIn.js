import { onNavigate } from '../main.js';
import { auth, provider} from '../lib/firebaseConfig.js';
import { signInWithRedirect, getRedirectResult  } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export const logIn = () =>{
    const logInsection = document.createElement('section');
    const welcomeSection = document.createElement('section');
    const welcomeLine = document.createElement('p');
    const appLogo = document.createElement('img');
    const  appName = document.createElement('h1');
    const slogan = document.createElement('p');
    const buttonGoogleLogIn = document.createElement('button');
    // Contenedor alerta de Google
    const alertGoogle = document.createElement('div');
    
    welcomeLine.textContent = 'Welcome to';
    appLogo.setAttribute('alt', 'logo image');
    appLogo.setAttribute('src', './images/logoApp.png')
    appName.textContent = 'abstarct';
    slogan.textContent = 'A cool place to improve your english!';
    
    logInsection.append(welcomeSection,buttonGoogleLogIn, alertGoogle);
    welcomeSection.append(welcomeLine, appLogo, appName, slogan);
    
    buttonGoogleLogIn.textContent = 'logIn';

    buttonGoogleLogIn.addEventListener('click', (e) =>{
        signInWithRedirect(auth, provider);
        
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

        onNavigate('/home');
    });
    return logInsection;
};