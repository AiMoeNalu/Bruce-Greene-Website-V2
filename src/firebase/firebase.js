import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCAoCYMY5gl5e4LI7tztgu1ri5fLZ8WT3o",
    authDomain: "bruce-greene-website-v2.firebaseapp.com",
    databaseURL: "https://bruce-greene-website-v2.firebaseio.com",
    projectId: "bruce-greene-website-v2",
    storageBucket: "bruce-greene-website-v2.appspot.com",
    messagingSenderId: "257254276042",
    appId: "1:257254276042:web:388c10c13649b24613ed33",
    measurementId: "G-5QVDHNCTKS"
};  

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;