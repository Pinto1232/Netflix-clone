// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA1IDY1ONrpa0uotixv7jcWPo6tgL2GriM",
  authDomain: "movie-app-pinto-db.firebaseapp.com",
  projectId: "movie-app-pinto-db",
  storageBucket: "movie-app-pinto-db.appspot.com",
  messagingSenderId: "454263077998",
  appId: "1:454263077998:web:3b5188dbb69b689c743a7f",
  measurementId: "G-VVC7D8JX2Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;