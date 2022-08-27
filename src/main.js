import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import { store }  from './store'

// Firebase
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyB4Mg0f2RwARs-QDDw0wV0ATlg0CzS3pdQ",
    authDomain: "songs-app-a998a.firebaseapp.com",
    projectId: "songs-app-a998a",
    storageBucket: "songs-app-a998a.appspot.com",
    messagingSenderId: "40635899448",
    appId: "1:40635899448:web:0c409c32840fb3fc5c90cd",
    measurementId: "G-QF1ZR7X833"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App).use(router).mount('#app')
const vuestore = createStore(store);
app.use(vuestore)
