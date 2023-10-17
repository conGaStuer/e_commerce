import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { MotionPlugin } from "@vueuse/motion";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-E6UTRW8OmQgOT1Dk91S650rPviYHQc",
  authDomain: "login-form-963d9.firebaseapp.com",
  projectId: "login-form-963d9",
  storageBucket: "login-form-963d9.appspot.com",
  messagingSenderId: "748164628483",
  appId: "1:748164628483:web:1ad8f21cf6a79bf6d20e36",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).use(MotionPlugin).mount("#app");
