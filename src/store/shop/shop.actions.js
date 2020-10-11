import * as shopActions from './shop.types';

export const fetchCollectionsStart = () => ({
  type: shopActions.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFail = err => ({
  type: shopActions.FETCH_COLLECTIONS_FAILURE,
  payload: err
})