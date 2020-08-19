import firebase from 'firebase';

const firebaseConfig = {
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerEmail = new firebase.auth.EmailAuthProvider();

export { db, auth, providerGoogle, providerEmail };

export default db;