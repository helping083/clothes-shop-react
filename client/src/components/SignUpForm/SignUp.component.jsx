import React, { useState } from 'react'
import './sign-up.styles.scss';
import FormInput from '../FormInput/';
import Button from '../button/';
import {connect} from 'react-redux';
import { signUpStart } from '../../store/user/user.actions';

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
    <form className="sign-up-form" onSubmit={handleSubmit}>
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
    <div className='sign-up'>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      {renderForm()}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);