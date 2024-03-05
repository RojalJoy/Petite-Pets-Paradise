import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC4gB2HYXs7rEZ1g48hpuMms8LDYmYjtk8",
  authDomain: "petitepetsparadise-586ba.firebaseapp.com",
  projectId: "petitepetsparadise-586ba",
  storageBucket: "petitepetsparadise-586ba.appspot.com",
  messagingSenderId: "1020001470239",
  appId: "1:1020001470239:web:7bbefe6e948cc5ccf5122a"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);


