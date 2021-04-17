import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyATCUEbh_YKOM2mdmF95MW626IcupNj7WI",
  authDomain: "todo-9d4c0.firebaseapp.com",
  projectId: "todo-9d4c0",
  storageBucket: "todo-9d4c0.appspot.com",
  messagingSenderId: "916883598766",
  appId: "1:916883598766:web:9f39366f6e2228154a6c3f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
