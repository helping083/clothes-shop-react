import React, {useState} from 'react';
import FormInput from '../FormInput/';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styles';
import Button from '../button/';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
// todo: make an auth factory for different firebase auth actions
import {googleSignInStart, emailSignInStart} from '../../store/user/user.actions';

const SignInForm = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setCredentials] = useState({email:'', password:''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = userCredentials;
    emailSignInStart({email, password})
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setCredentials({...userCredentials, [name]: value});
  }

  const renderForm = () => {
    const {email, password} = userCredentials
    return (
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email" 
          type="email" 
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput 
          name="password" 
          type="password"
          label="password"
          handleChange={handleChange}
          value={password} 
          required
        />
        <ButtonsBarContainer>
          <Button name="submit" type="submit" value="submit form">submit</Button>
          <Button
            type="button" 
            onClick={googleSignInStart} 
            isGoggleSignIn={true}
          >google</Button>
        </ButtonsBarContainer>
      </form>
    )
  }
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>sign in with your email and password</span>
        {renderForm()}
      </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})

SignInForm.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignInForm);