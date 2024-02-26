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

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    //  self.registration.showNotification(notificationTitle, notificationOptions);
});
