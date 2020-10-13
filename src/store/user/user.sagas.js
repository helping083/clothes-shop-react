import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as UserActions from './user.type';
import {auth, googleProvider} from '../../config/firebase.config';
import firebaseService from '../../shared/services/Firebase.service';
import {googleSignInSuccess, googleSignInError} from './user.actions';

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(firebaseService.createUserProfileDocument,user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));

  } catch (error) {
    yield put(googleSignInError(error));
    console.log(error)
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActions.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}