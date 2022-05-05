import { onNavigate } from "../main.js";

export const home = () =>{
    const homeSection = document.createElement('section');
    const nodoH2 = document.createElement('h2');
    const buttonLogOut = document.createElement('button');

    nodoH2.textContent = 'This is the principal view'
    buttonLogOut.textContent = 'logout';
    buttonLogOut.addEventListener('click', () =>{
        onNavigate('/');
    });
    homeSection.append(nodoH2, buttonLogOut);
    return homeSection;
};
