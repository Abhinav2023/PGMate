import firebase from 'firebase';
import Rebase from 're-base';

const key = {
    apiKey: "AIzaSyALXqmc4sAIT5citDl-YdSNTDHR8w6jFZ4",
    authDomain: "pgmate-5ebf9.firebaseapp.com",
    databaseURL: "https://pgmate-5ebf9.firebaseio.com",
    projectId: "pgmate-5ebf9",
    storageBucket: "pgmate-5ebf9.appspot.com",
    messagingSenderId: "979258396952",
    appId: "1:979258396952:web:4b781f62515ce17b958e6d",
    measurementId: "G-6SE51RLHTM"
};

const app = firebase.initializeApp(key);

const base = Rebase.createClass(app.database());

export default base;
