////Code for adding event on click of notification
self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick', event);

    event.notification.close();
    //event.waitUntil(self.clients.openWindow(urlToRedirect));

    event.waitUntil(
        clients
            .matchAll({
                includeUncontrolled: true,
                type: 'window'
            })
            .then((clientList) => {
                for (const client of clientList) {
                    if ('focus' in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow('/app/chat');
            })
    );
});
