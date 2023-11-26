import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-yxrUxo5KOOQKnWTvE5iLCPNRXTnro4w",
  authDomain: "how-much-652ab.firebaseapp.com",
  projectId: "how-much-652ab",
  storageBucket: "how-much-652ab.appspot.com",
  messagingSenderId: "1016007187566",
  appId: "1:1016007187566:web:2f83d68a3e305cbc25da7f"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }