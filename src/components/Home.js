import { onNavigate } from "../main.js";

export const Home = () =>{
    const HomeDiv = document.createElement('div');
    const nodoH1 = document.createElement('h1');
    const buttonLogIn = document.createElement('button');

    
    buttonLogIn.textContent = 'logIn';
    buttonLogIn.addEventListener('click', () =>{
        onNavigate('/register');
    });
    nodoH1.textContent = 'This is the "logIn" view'
    HomeDiv.append(nodoH1, buttonLogIn);
    return HomeDiv;
};
