import {fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFail} from './shop.actions';
import {fireStore} from '../../config/firebase.config';
import {convertCollectionsSnapshotToMap} from '../../shared/services/Firebase.service';

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = fireStore.collection('shop');
    dispatch(fetchCollectionsStart());
    collectionRef.get()
      .then((shapshot)=>{
        const collectionsMap = convertCollectionsSnapshotToMap(shapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap)); 
      })
      .catch((error) => {
        dispatch(fetchCollectionsFail(error))
      })
  }
}