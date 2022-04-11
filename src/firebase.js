
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfD9Nf_9-G0VyI7wD6VypHZq-3L0hj1CU",
    authDomain: "messenger-clone-385a5.firebaseapp.com",
    projectId: "messenger-clone-385a5",
    storageBucket: "messenger-clone-385a5.appspot.com",
    messagingSenderId: "633925204482",
    appId: "1:633925204482:web:c4be6f0975106649e3051b",
    measurementId: "G-H92NCZ2KLW"
  

};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;