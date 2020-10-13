import * as UserActionTypes from './user.type';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInError = (err) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: err
})

export const CheckUserSession = () =>({
  type: UserActionTypes.CHECK_USER_SESSION
})