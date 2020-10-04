import axios from 'axios';
import {fireStore} from '../../config/firebase.config.js';
import {auth} from '../../config/firebase.config.js';
class FirebaseRequests {
  createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        throw new Error(error);
      }
    }
  
    return userRef;
  }
  signUp = () => {

  }
}

export default new FirebaseRequests();