
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3b1DCw6TZlrSurp5rjzaEgCUFuIUBJsU",
  authDomain: "filmyverse-350aa.firebaseapp.com",
  projectId: "filmyverse-350aa",
  storageBucket: "filmyverse-350aa.appspot.com",
  messagingSenderId: "9527627804",
  appId: "1:9527627804:web:142b1109543bd61ec34fd9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;