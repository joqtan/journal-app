import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBwga_iKUFRflBtKlnFW7l_pJiL7gs5jI8',
    authDomain: 'react-course-c30d0.firebaseapp.com',
    projectId: 'react-course-c30d0',
    storageBucket: 'react-course-c30d0.appspot.com',
    messagingSenderId: '178523331860',
    appId: '1:178523331860:web:ab3da28faf8425e4adb601',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
