let buttonNotifyPermission = document.querySelector('.notify-permission');
let buttonNotifyTrigger = document.querySelector('.notify-trigger');

buttonNotifyPermission.addEventListener('click', (event) => {
    event.preventDefault();

    if (!window.Notification) {
        return;
    }
    Notification.requestPermission((permission) => {
        debugger;
        if (permission === 'denied') {
            debugger;
        }
    })
});

//Komentarz

buttonNotifyTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    if (Notification.permission !== 'granted') {
        return;
    }
    new Notification('New message', {
        body: 'Lorem ipsum dolor sit amet',
        timestamp: 50
    });
});
