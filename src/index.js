import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJO05Up3r5e9vVbD-NTebtiAQutPSqB5o",
  authDomain: "cart-9256c.firebaseapp.com",
  projectId: "cart-9256c",
  storageBucket: "cart-9256c.appspot.com",
  messagingSenderId: "408417128923",
  appId: "1:408417128923:web:6c22e531d0a349dacd57fe"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

// Initialize Firebase



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

