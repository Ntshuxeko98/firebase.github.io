import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsu1SLqztTuiwgKTfND0RkIfP0-b53ecA",
    authDomain: "life-b1ce2.firebaseapp.com",
    projectId: "life-b1ce2",
    storageBucket: "life-b1ce2.appspot.com",
    messagingSenderId: "496560861721",
    appId: "1:496560861721:web:26724da64c4aa51d10b088",
    measurementId: "G-K37BX5012X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default firebase