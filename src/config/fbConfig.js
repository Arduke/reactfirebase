import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyBT9c3ynY39PQVIeTRBArj9dH9TZfDh7uM",
    authDomain: "net-ninja-marioplan-1497e.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-1497e.firebaseio.com",
    projectId: "net-ninja-marioplan-1497e",
    storageBucket: "net-ninja-marioplan-1497e.appspot.com",
    messagingSenderId: "414164107332",
    appId: "1:414164107332:web:525c875defcb618a51fc11",
    measurementId: "G-2CNN4LR86X"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;