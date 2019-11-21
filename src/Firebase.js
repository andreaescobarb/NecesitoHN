import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCP_odWnwCBVQH1AS9yct9ye65LbOSlkTo",
    authDomain: "necesito-4ed9a.firebaseapp.com",
    databaseURL: "https://necesito-4ed9a.firebaseio.com",
    projectId: "necesito-4ed9a",
    storageBucket: "necesito-4ed9a.appspot.com",
    messagingSenderId: "319526243605",
    appId: "1:319526243605:web:c2eaff3d58f2dc7debed1c",
    measurementId: "G-JVFR85HEFM"
  };

  let app = Firebase.initializeApp(config);
  export const db = app.database();
  export const firebase = app;