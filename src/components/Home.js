
import { auth} from '../lib/firebaseConfig.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';
import { addPost } from '../lib/fireStore.js';
import { showedPost } from '../components/post.js';

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
    postText.setAttribute('placeholder', 'Creat the craziest story and post it!');
    submitBotton.setAttribute('type', 'submit');
    submitBotton.setAttribute('value', 'post');
    submitBotton.setAttribute('id', 'submitBotton');


//-------------- Incorporación de log Out al botón ----------------------------------
    buttonLogOut.addEventListener('click', (e) =>{
        signOut(auth).then(() => {
        console.log("se cerró")
        }).catch((error) => {
        console.log(error);
        });
        
    });

//--------------- Traer el texto escrito en el post ----------------------------------
    submitBotton.addEventListener('click', ()=>{
        postText.value
        addPost(postText.value).then(()=>{
            postText.value = '';
        }).catch(()=>{
            console.log('fail');
        })
    });

//--------------- Herencia de nodos ---------------------------------------------------
    logoContainer.appendChild(logoApp);
    homeHeader.append(logoContainer, topMessage, buttonLogOut);
    containerWords.append( word1, word2, word3);
    postSection.append(postText, submitBotton);
    allPostSection.append(postSection, showedPost());
    console.log(showedPost());
    homeSection.append(homeHeader, advise,containerWords, allPostSection);

    return homeSection;
};
