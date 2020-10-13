import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as UserActions from './user.type';
import {auth, googleProvider} from '../../config/firebase.config';
import firebaseService from '../../shared/services/Firebase.service';
import {
  SignInSuccess, 
  SignInError, 
} from './user.actions';

// todo: auth actions into an auth service

export function* getSnapshotFromFirebase(userAuth) {
  try{
    const userRef = yield call(firebaseService.createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(SignInError(error))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    getSnapshotFromFirebase(user);
  } catch (error) {
    yield put(SignInError(error))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    getSnapshotFromFirebase(user);
  } catch (error) {
    yield put(SignInError(error));
    console.log(error)
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActions.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActions.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}