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

  getCurrentUser = () => {
    return new Promise((res,rej) => {
      const unsubscribe = auth.onAuthStateChanged( userAuth => {
        unsubscribe();
        res(userAuth);
      }, rej)
    })
  }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  try {
    const collectionRef = fireStore.collection(collectionKey);
    const batch = fireStore.batch();
    objectsToAdd.forEach((obj, index) =>{
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj);
    })
    return await batch.commit();
  } catch (error) {
    console.log(error);
  }
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc
  },{})
}

export default new FirebaseRequests();