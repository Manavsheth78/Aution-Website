import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyALdREMorCck6QdSDKBz51OMsPGKOEOeHE",
  authDomain: "auctioneer-cfadb.firebaseapp.com",
  projectId: "auctioneer-cfadb",
  storageBucket: "auctioneer-cfadb.appspot.com",
  messagingSenderId: "652989739042",
  appId: "1:652989739042:web:e2c4179e12e57902bc1a7b"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
