import firebase from 'firebase'; 



const firebaseConfig = {
  apiKey: "AIzaSyD1b25Zw4fXq32mqQOzJ_EG_LD_2po5CIQ",
  authDomain: "challenge-6bfa2.firebaseapp.com",
  databaseURL: "https://challenge-6bfa2.firebaseio.com",
  projectId: "challenge-6bfa2",
  storageBucket: "challenge-6bfa2.appspot.com",
  messagingSenderId: "486820597714",
  appId: "1:486820597714:web:b7ee962e15954463ef420b",
  measurementId: "G-8G9HGQPWQY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth(); 

export  {db, auth};