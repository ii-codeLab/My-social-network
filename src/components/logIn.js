import { onNavigate } from "../main.js";

export const logIn = () =>{
    const logInsection = document.createElement('section');
    const nodoH1 = document.createElement('h1');
    const buttonLogIn = document.createElement('button');

    
    buttonLogIn.textContent = 'logIn';
    buttonLogIn.addEventListener('click', () =>{
        onNavigate('/home');
    });
    nodoH1.textContent = 'This is the "logIn" view'
    logInsection.append(nodoH1, buttonLogIn);
    return logInsection;
};