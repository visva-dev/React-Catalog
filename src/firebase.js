import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC91kABJs37iEupZ6C4FhnErppW_6v4Qtg',
  authDomain: 'react-catalog-d1ef6.firebaseapp.com',
  projectId: 'react-catalog-d1ef6',
  storageBucket: 'react-catalog-d1ef6.appspot.com',
  messagingSenderId: '921269354636',
  appId: '1:921269354636:web:7deaf75b2cb525663cfba9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
