// Este es el punto de entrada de tu aplicacion
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"
import { logIn } from './components/logIn.js';
import { home } from './components/home.js';



//myFunction();
const rootSection = document.getElementById('root');

const routes = {
    '/' : logIn, 
    '/home' : home, 
  };
  

export const onNavigate = (pathname) => {
      window.history.pushState(
          {},
          pathname,
          window.location.origin + pathname,
      );
      while(rootSection.firstChild){
          rootSection.removeChild(rootSection.firstChild)
      }
      rootSection.appendChild(routes[pathname]());
  };

window.onpopstate = () => {
    rootSection.appendChild(routes[window.location.pathname]());
    
  };

let compon = routes[window.location.pathname];
rootSection.appendChild(compon());

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    onNavigate('/home');
    const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          console.log(providerData)
  } else {
    onNavigate('/')
  }
});