import { takeEvery, call, put, all } from 'redux-saga/effects';
import {fetchCollectionsSuccess, fetchCollectionsFail} from './shop.actions';
import {fireStore} from '../../config/firebase.config';
import {convertCollectionsSnapshotToMap} from '../../shared/services/Firebase.service';
import * as shopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = fireStore.collection('shop');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}