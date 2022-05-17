import { onNavigate } from '../main.js';
import { auth} from '../lib/firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';
import { addNote } from '../lib/firebaseConfig.js';

export const home = () =>{
//---------------------- CREACIÓN DE NODOS -----------------------------------------
    const homeSection = document.createElement('section');
    const homeHeader = document.createElement('header');
    const logoApp = document.createElement('img');
    const topMessage = document.createElement('h2');    
    const buttonLogOut = document.createElement('button');

    const containerWords = document.createElement('section');
    const advise = document.createElement('p');
    const section1 = document.createElement('section');
    const section2 = document.createElement('section');
    const section3 = document.createElement('section');
    const word1 = document.createElement('p');
    const word2 = document.createElement('p');
    const word3 = document.createElement('p');

    const allPostSection = document.createElement('section');
    const postSection = document.createElement('section');
    const postInput = document.createElement('input');
    const submitBotton = document.createElement('input');

    logoApp.setAttribute('alt', 'logo image');
    logoApp.setAttribute('src', './images/logoApp.png');

    topMessage.textContent= 'Time to  imagine and play!';
    buttonLogOut.textContent = 'logout';
    advise.textContent = 'Words of the week:';
    word1.textContent = 'chicken';
    word2.textContent = 'park';
    word3.textContent = 'eat';

    postInput.setAttribute('type', 'text');
    submitBotton.setAttribute('type', 'submit');
    submitBotton.setAttribute('value', 'post');



//-------------- Incorporación de log Out al botón ----------------------------------
    buttonLogOut.addEventListener('click', (e) =>{
        signOut(auth).then(() => {
        onNavigate('/')
        console.log("se cerró")
        }).catch((error) => {
        console.log(error);
        });
        
    });

//--------------- Traer el texto escrito en el post ----------------------------------
    submitBotton.addEventListener('click', ()=>{
        const textPost = postInput.value
        addNote(textPost);
    });

//--------------- Herencia de nodos ---------------------------------------------------
    homeHeader.append(logoApp, topMessage, buttonLogOut);
    section1.appendChild(word1);
    section2.appendChild(word2);
    section3.appendChild(word3);
    containerWords.append(advise, section1, section2, section3);
    postSection.append(postInput, submitBotton);
    allPostSection.appendChild(postSection);
    homeSection.append(homeHeader, containerWords, allPostSection);
    return homeSection;
};
