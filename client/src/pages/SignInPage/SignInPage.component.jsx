import React from 'react'
import SignInForm from '../../components/SignInForm/';
import SignUpForm from '../../components//SignUpForm/';
import {SignInContainer} from './signIn.styles';
const  SignInPage = () => {
  return (
    <SignInContainer>
      <SignInForm/>
      <SignUpForm/>
    </SignInContainer>
  )
}

export default SignInPage;