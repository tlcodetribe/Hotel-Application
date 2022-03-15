  import firebase from 'firebase'
  import 'firebase/auth'
  import 'firebase/firestore'

const baseConfig = {
  apiKey: "AIzaSyAijrsR9ty91JUWnL_m3zE0LRTkdf0MXxc",
  authDomain: "hotapp-3c324.firebaseapp.com",
  projectId: "hotapp-3c324",
  storageBucket: "hotapp-3c324.appspot.com",
  messagingSenderId: "547247897742", 
  appId: "1:547247897742:web:8a5473105e6849939e5ddf",
  measurementId: "G-MY9PCW0X0B"
};

// Initialize Firebase
firebase.initializeApp(baseConfig);

export{firebase}  