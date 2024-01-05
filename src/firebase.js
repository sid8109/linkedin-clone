import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3ZLg7qSXrb1lbxnFzCB92XkqLeOgvaLc",
  authDomain: "linkedin-clone-3dff4.firebaseapp.com",
  projectId: "linkedin-clone-3dff4",
  storageBucket: "linkedin-clone-3dff4.appspot.com",
  messagingSenderId: "476426552424",
  appId: "1:476426552424:web:6e7f659b145d8bd1fe67dd",
  measurementId: "G-88JP7BT79V"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
const storage = getStorage();
const db = getFirestore(firebaseApp)

export { auth, provider, storage, ref };
export default db;