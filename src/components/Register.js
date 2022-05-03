import { onNavigate } from "../main.js";

export const Register = () =>{
    const RegisterDiv = document.createElement('div');
    const nodoH2 = document.createElement('h2');
    const buttonLogOut = document.createElement('button');

    nodoH2.textContent = 'This is the principal view'
    buttonLogOut.textContent = 'logout';
    buttonLogOut.addEventListener('click', () =>{
        onNavigate('/');
    });
    RegisterDiv.append(nodoH2, buttonLogOut);
    return RegisterDiv;
};
