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
  signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new FirebaseRequests();