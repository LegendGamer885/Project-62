 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
    apiKey: "AIzaSyCGpWCGj_NzlI8060s5T-dsXojDQNaEYvQ",
    authDomain: "schoolattendanceapp-7462b.firebaseapp.com",
    databaseURL: "https://schoolattendanceapp-7462b-default-rtdb.firebaseio.com",
    projectId: "schoolattendanceapp-7462b",
    storageBucket: "schoolattendanceapp-7462b.appspot.com",
    messagingSenderId: "866597081049",
    appId: "1:866597081049:web:b85745241397eb44a993c8",
    measurementId: "G-CKVTEH45W5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 