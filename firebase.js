import  * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3LBUKJcnJz42CQhR4WNgiwlEUjPZCzk8",
    authDomain: "firereact-34729.firebaseapp.com",
    databaseURL: "https://firereact-34729.firebaseio.com",
    projectId: "firereact-34729",
    storageBucket: "firereact-34729.appspot.com",
    messagingSenderId: "258719736517",
    appId: "1:258719736517:web:051ee6d04dca082a1cc6ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;