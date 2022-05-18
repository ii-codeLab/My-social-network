import { onNavigate } from '../main.js';
import { auth} from '../lib/firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';
import { addNote } from '../lib/firebaseConfig.js';

export const home = () =>{
//---------------------- CREACIÓN DE NODOS -----------------------------------------
    const homeSection = document.createElement('section');

    const homeHeader = document.createElement('header');
    const logoContainer = document.createElement('section');
    const logoApp = document.createElement('img');
    const topMessage = document.createElement('h2');    
    const buttonLogOut = document.createElement('button');

    const advise = document.createElement('h3');
    const containerWords = document.createElement('section');
    const word1 = document.createElement('p');
    const word2 = document.createElement('p');
    const word3 = document.createElement('p');

    const allPostSection = document.createElement('section');
    const postSection = document.createElement('section');
    const postText = document.createElement('textarea');
    const submitBotton = document.createElement('input');

    homeSection.className = 'homeSection';
    advise.setAttribute('id', 'advise');
    logoContainer.className = 'logoContainer';
    allPostSection.className = 'allPostSection';
    postSection.className = 'postSection';
    containerWords.className = 'containerWords';
    
    logoApp.setAttribute('alt', 'logo image');
    logoApp.setAttribute('src', './images/logoApp.png');
    buttonLogOut.setAttribute('id', 'buttonLogOut');
    
    topMessage.textContent= 'Time to  imagine and play!';
    buttonLogOut.textContent = 'logout';
    advise.textContent = 'Words of the week:';
    word1.textContent = 'chicken';
    word2.textContent = 'park';
    word3.textContent = 'eat';

    postText.setAttribute('id', 'postText');
    submitBotton.setAttribute('type', 'submit');
    submitBotton.setAttribute('value', 'post');
    submitBotton.setAttribute('id', 'submitBotton');


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
        const textPost = postText.value
        addNote(textPost);
    });

//--------------- Herencia de nodos ---------------------------------------------------
    logoContainer.appendChild(logoApp);
    homeHeader.append(logoContainer, topMessage, buttonLogOut);
    containerWords.append( word1, word2, word3);
    postSection.append(postText, submitBotton);
    allPostSection.appendChild(postSection);
    homeSection.append(homeHeader, advise,containerWords, allPostSection);

    

    return homeSection;
};
