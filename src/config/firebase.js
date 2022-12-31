import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyA5ah3RMxF1Vn0uIir09_ff1ulbeMnIAxU",
  authDomain: "auctioneer-53c42.firebaseapp.com",
  projectId: "auctioneer-53c42",
  storageBucket: "auctioneer-53c42.appspot.com",
  messagingSenderId: "792769543898",
  appId: "1:792769543898:web:1ff8716270600d63a72fe3"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
