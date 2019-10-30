import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQgkzxGYlUo7-BD7zpPxCKUR8GAPLxdM4",
  authDomain: "shopapp-db-38d9d.firebaseapp.com",
  databaseURL: "https://shopapp-db-38d9d.firebaseio.com",
  projectId: "shopapp-db-38d9d",
  storageBucket: "shopapp-db-38d9d.appspot.com",
  messagingSenderId: "262215189447",
  appId: "1:262215189447:web:6f0b9c403364aabeef4fe2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;