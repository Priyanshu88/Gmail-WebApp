import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADTXJh-dxpiV9KsLZ522B5iPLihrA8mZQ',
  authDomain: 'clo-c911f.firebaseapp.com',
  projectId: 'clo-c911f',
  storageBucket: 'clo-c911f.appspot.com',
  messagingSenderId: '547032839003',
  appId: '1:547032839003:web:d7af2d81a89a0634b0a07e',
  measurementId: 'G-N4WTN6EYPR',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
