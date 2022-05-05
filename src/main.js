// Este es el punto de entrada de tu aplicacion
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
