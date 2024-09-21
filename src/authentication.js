// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBRFmCYLPQCakift-8TGq715X6yDcs8aE",
  authDomain: "fir-e-commerce-40981.firebaseapp.com",
  projectId: "fir-e-commerce-40981",
  storageBucket: "fir-e-commerce-40981.appspot.com",
  messagingSenderId: "8802463566",
  appId: "1:8802463566:web:1308708579e4809c4e781f",
  measurementId: "G-F89HH6NM26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password") || null;
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  if (password.value != confirmPassword.value) {
    alert("Passwords Don't Match");
  } else {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("creating account");
        window.location.href = "index.html";
        localStorage.setItem("email", email.value);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const slashIndex = errorMessage.indexOf("/");
        const endIndex = errorMessage.indexOf(")", slashIndex);
        const result = errorMessage.slice(slashIndex + 1, endIndex);
        alert(result);
      });
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("login succesful");
      window.location.href = "index.html";
      localStorage.setItem("email", email.value);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const slashIndex = errorMessage.indexOf("/");
      const endIndex = errorMessage.indexOf(")", slashIndex);
      const result = errorMessage.slice(slashIndex + 1, endIndex);
      alert(result);
    });
});

