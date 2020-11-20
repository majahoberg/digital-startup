import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase 
.initializeApp ({
        apiKey: "AIzaSyDSVSitflpCv4xAs6vwIJrBvqiP_m3J-3U",
        authDomain: "crud-spa-7dfe3.firebaseapp.com",
        databaseURL: "https://crud-spa-7dfe3.firebaseio.com",
        projectId: "crud-spa-7dfe3",
        storageBucket: "crud-spa-7dfe3.appspot.com",
        messagingSenderId: "393493758902",
        appId: "1:393493758902:web:0eca16db5418fd89b83717"
      // Initialize Firebase
})
.firestore();

export const postRef = db.collection("posts");