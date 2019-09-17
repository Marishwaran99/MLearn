import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4n4xnzMyI5jyxWVTZMajqVQVTW6IH2v0",
  authDomain: "mlearn-5cbfd.firebaseapp.com",
  databaseURL: "https://mlearn-5cbfd.firebaseio.com",
  projectId: "mlearn-5cbfd",
  storageBucket: "mlearn-5cbfd.appspot.com",
  messagingSenderId: "220066592951",
  appId: "1:220066592951:web:b1bb127641856d5a"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
