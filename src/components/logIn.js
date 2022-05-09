import { onNavigate } from "../main.js";

export const logIn = () =>{
    const logInsection = document.createElement('section');
    const welcomeSection = document.createElement('section');
    const welcomeLine = document.createElement('p');
    const appLogo = document.createElement('img');
    const  appName = document.createElement('h1');
    const slogan = document.createElement('p');
    const buttonGoogleLogIn = document.createElement('button');


    
    buttonGoogleLogIn.textContent = 'logIn';
    buttonGoogleLogIn.addEventListener('click', () =>{
        onNavigate('/home');
    });
    welcomeLine.textContent = 'Welcome to';

    appName.textContent = 'abstarct';
    slogan.textContent = 'A cool place to improve your english!';
    logInsection.append(welcomeSection,buttonGoogleLogIn);
    welcomeSection.append(welcomeLine, appLogo, appName);

    return logInsection;
};