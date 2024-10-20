////Code for adding event on click of notification
self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick', event);
    const url = event.notification?.data?.url;
    const serviceUrl = `${event.target.location.origin}${url}`;

    event.notification.close();

    //event.waitUntil(self.clients.openWindow(urlToRedirect));

    event.waitUntil(
        clients
            .matchAll({
                includeUncontrolled: true,
                type: 'window'
            })
            .then((windowClients) => {
                let matchingClient = null;
                for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    if (windowClient.url === serviceUrl) {
                        matchingClient = windowClient;
                        break;
                    }
                }

                if (matchingClient) {
                    return matchingClient.focus();
                } else {
                    return clients.openWindow(serviceUrl);
                }

                /*   for (const client of clientList) {
                    if ('focus' in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow(url); */
            })
    );
});
