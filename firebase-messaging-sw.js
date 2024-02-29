// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: 'AIzaSyAza2ttwL_S947xdIVkgvrlS8kIgUXva9w',
    authDomain: 'shmooz-79c7e.firebaseapp.com',
    projectId: 'shmooz-79c7e',
    storageBucket: 'shmooz-79c7e.appspot.com',
    messagingSenderId: '786248212603',
    appId: '1:786248212603:web:fafda5a88186239bc182de'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

const formatData = (input) => {
    if (input > 9) {
        return input;
    } else return `0${input}`;
};

// Function to convert
// 24 Hour to 12 Hour clock
const formatHour = (input) => {
    if (input > 12) {
        return input - 12;
    }
    return input;
};

const formatDate = (date) => {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday;
};

const formatTime = (date) => {
    const today = new Date(date);
    let hh = formatData(formatHour(today.getHours()));
    let MM = formatData(today.getMinutes());
    const formattedToday = `${hh}:${MM} ${today.getHours() > 12 ? 'PM' : 'AM'}`;

    return formattedToday;
};

/* messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here

    const type = payload.data.type;

    const { venue_name, from_user_name, start_date, start_time, end_date, end_time, from_user_avatar } = payload.data;

    let notificationTitle = '';

    let body = payload.body;

    switch (type) {
        case 'venue_booking_request': {
            notificationTitle = 'Venue Booking Request';
            const startDate = formatDate(start_date);
            const startTime = formatTime(`${start_date} ${start_time}`);

            const endDate = formatDate(end_date);
            const endTime = formatTime(`${end_date} ${end_time}`);

            body = `${from_user_name} has requested booking for Venue (${venue_name}) from ${startDate} ${startTime} to ${endDate} ${endTime}`;
        }
    }
    // = payload.notification.title + 'custom';
    const notificationOptions = {
        body: body,
        data: { ...payload.data, url: 'http://localhost:3000/manage/venue-list/' },
        icon: from_user_avatar
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

////Code for adding event on click of notification
self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick', event);
    var urlToRedirect = event.notification.data.url;
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
                if (clients.openWindow) return clients.openWindow(urlToRedirect);
            })
    );
}); */
