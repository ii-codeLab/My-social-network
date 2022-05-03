// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/login';

import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
//import { contact } from './components/contact.js';
//import { about } from './components/about.js';


//myFunction();
const rootSection = document.getElementById('root');

const routes = {
    '/' : Home,
    '/register' : Register, 
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
