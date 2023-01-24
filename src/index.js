import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUopBWy23IWTwUC4AolNMd3LzgxP17sEs",
  authDomain: "cart-e4bef.firebaseapp.com",
  projectId: "cart-e4bef",
  storageBucket: "cart-e4bef.appspot.com",
  messagingSenderId: "381187081116",
  appId: "1:381187081116:web:4bd09b35167d95065c3e59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
