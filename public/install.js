'use strict';

let deferredInstallPrompt = null;
let installButton = document.getElementById('butInstall');


window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

installButton.addEventListener('click', installPWA);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice) =>{
        if(choice.outcome === 'accepted'){
            console.log("aceptado");
        } else{
            console.log("No aceptado")
        }
    deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("app de juego instalada");
}

