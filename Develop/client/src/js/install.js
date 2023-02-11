
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});
    //agrengando aqui -- to store triggered events
    window.deferredPrompt = event;
    //agregando aqui -- remove hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});
    //agregando aqui -- 
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    //agregando aqui -- enseñar el prompt
    promptEvent.prompt();
    //agregando aqui -- solo usar una vez; reset deferred prompt var
    windoww.deferredPrompt = null;

    butInstall.classList.toggle('hidden, true');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
//agregando aqui -- to clear the prompt
    window.deferredPrompt = null;

});
