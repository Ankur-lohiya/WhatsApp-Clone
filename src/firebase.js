// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC1rfW9cxGqZyPAmCGkMFQTig_4Q2YZvOc",
    authDomain: "whatsapp-clone-9c15d.firebaseapp.com",
    projectId: "whatsapp-clone-9c15d",
    storageBucket: "whatsapp-clone-9c15d.appspot.com",
    messagingSenderId: "743836805960",
    appId: "1:743836805960:web:0658eebb85bcbcab78217d",
    measurementId: "G-SM44MS98KD"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
 export {auth, provider};
 export default db;