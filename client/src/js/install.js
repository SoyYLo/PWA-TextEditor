const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // prevent mini-infobar from appearing
    event.preventDefault;
    // stash event 
    window.deferredPrompt = event;
    // remove hidden class from install button container
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptE = window.deferredPrompt;
    if (!promptE) {
        return;
    }
    // show the install prompt
    promptE.prompt();
    window.deferredPrompt = null;
    // hide install button
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
