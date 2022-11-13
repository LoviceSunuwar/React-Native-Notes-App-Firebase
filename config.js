// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat';
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrihp3TRQkjcmul2ndFTfPKpcWgdIA_ig",
  authDomain: "reactnativecourseproject.firebaseapp.com",
  projectId: "reactnativecourseproject",
  storageBucket: "reactnativecourseproject.appspot.com",
  messagingSenderId: "836228769938",
  appId: "1:836228769938:web:3e060a5bb210c61b879e4b",
  measurementId: "G-R3CFJQP7NM"
};

firebase.initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);

const imagesRef =ref(storage, 'images');

firebase.firestore();

export default firebase;