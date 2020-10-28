import React, { useState } from 'react'
import FormInput from '../FormInput/';
import Button from '../button/';
import {connect} from 'react-redux';
import { signUpStart } from '../../store/user/user.actions';
import {SignUpContainer, SignUpTitle} from './sign-up.styles';
import PropTypes from 'prop-types';

const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = userCredentials;
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return
    }
    signUpStart({displayName, email, password})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserCredentials({...userCredentials ,[name]:value} );
  }

  const renderForm = () => {
    const {displayName, email, password, confirmPassword} = userCredentials;

    return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        label='displayName'
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        label='email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        label='password'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        label='confirmPassword'
        required
      />
      <Button type='submit'>SIGN UP</Button>
    </form>
    )
  }
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with email and password</span>
      {renderForm()}
    </SignUpContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignUp);