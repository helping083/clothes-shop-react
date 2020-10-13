import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as UserActions from './user.type';
import {auth, googleProvider} from '../../config/firebase.config';
import firebaseService from '../../shared/services/Firebase.service';
import {
  SignInSuccess, 
  SignInError, 
  signOutSuccess,
  signOutFailure
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

export function* isUserAuth() {
  try {
    const userAuth = yield firebaseService.getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromFirebase(userAuth)
  } catch (error) {
    yield put(SignInError(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromFirebase(user);
  } catch (error) {
    yield put(SignInError(error))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromFirebase(user);
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

export function* onCheckUserSession() {
  yield takeLatest(UserActions.CHECK_USER_SESSION, isUserAuth)
}

export function* onSignOutStart() {
  yield takeLatest(UserActions.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart), 
    call(isUserAuth),
    call(onSignOutStart)
  ])
}