import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDwXp6ATYig9HTnSTkfCI4mr7fYZK_8mJQ",
    authDomain: "crwn-db-d4958.firebaseapp.com",
    projectId: "crwn-db-d4958",
    storageBucket: "crwn-db-d4958.appspot.com",
    messagingSenderId: "125567786204",
    appId: "1:125567786204:web:21d8252a75c8cda8b4a819",
    measurementId: "G-K7PTCWT16P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) 
        return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try
        {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log(error);
        }
    }
    return userRef;
}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;