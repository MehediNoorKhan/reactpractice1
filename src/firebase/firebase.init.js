import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDFFMMkNulB6F6L4jFeoqWOAOzcHZAvDs",
   authDomain: "reactpractice1-65b30.firebaseapp.com",
    projectId: "reactpractice1-65b30",
     storageBucket: "reactpractice1-65b30.firebasestorage.app",
      messagingSenderId: "542927321329",
   appId: "1:542927321329:web:b950af857def9b88605150",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;