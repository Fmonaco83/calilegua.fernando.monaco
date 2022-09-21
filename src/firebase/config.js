import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAlZWxpiMdNMjpixl0UeX6NBGt50atOBCw",
  authDomain: "calilegua-bd80a.firebaseapp.com",
  projectId: "calilegua-bd80a",
  storageBucket: "calilegua-bd80a.appspot.com",
  messagingSenderId: "115447537973",
  appId: "1:115447537973:web:de224dd2d9fdad7980ec7c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
