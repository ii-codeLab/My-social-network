import { onNavigate } from '../main.js';
import { auth} from '../lib/firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export const home = () =>{
//---------------------- CREACIÓN DE NODOS -----------------------------------------
    const homeSection = document.createElement('section');
    const homeHeader = document.createElement('header');
    const logoApp = document.createElement('img');
    const topMessage = document.createElement('h2');    
    const buttonLogOut = document.createElement('button');
    
    logoApp.setAttribute('alt', 'logo image');
    logoApp.setAttribute('src', './images/logoApp.png');
    topMessage.textContent= 'Time to  imagine and play!';
    buttonLogOut.textContent = 'logout';

//-------------- Incorporación de log Out al botón ----------------------------------
    buttonLogOut.addEventListener('click', (e) =>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
        onNavigate('/');
    });

//--------------- Herencia de nodos ---------------------------------------------------
    homeHeader.append(logoApp, topMessage, buttonLogOut);
    homeSection.append(homeHeader);
    return homeSection;
};
