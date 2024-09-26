// configFirebase.js
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDUsqPhUBhG4LvQ5IJ6bYYC9vjuX1tUAdo",
    authDomain: "rshidraulicaeeletrica-9f8f8.firebaseapp.com",
    databaseURL: "https://rshidraulicaeeletrica-9f8f8-default-rtdb.firebaseio.com",
    projectId: "rshidraulicaeeletrica-9f8f8",
    storageBucket: "rshidraulicaeeletrica-9f8f8.appspot.com",
    messagingSenderId: "164422875750",
    appId: "1:164422875750:web:c8a1e4a77893ec5e8d4ba7",
    measurementId: "G-25XGMN3XCN"
  };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, set, push, ref };
