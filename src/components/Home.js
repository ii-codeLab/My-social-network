import { onNavigate } from '../main.js';
import { auth} from '../lib/firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export const home = () =>{
    const homeSection = document.createElement('section');
    const nodoH2 = document.createElement('h2');
    const buttonLogOut = document.createElement('button');

    nodoH2.textContent = 'This is the principal view'
    buttonLogOut.textContent = 'logout';
    buttonLogOut.addEventListener('click', (e) =>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
        onNavigate('/');
    });
    homeSection.append(nodoH2, buttonLogOut);
    return homeSection;
};
