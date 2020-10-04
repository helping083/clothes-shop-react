import React, { Component } from 'react'
import './sign-up.styles.scss';
import FormInput from '../FormInput/';
import Button from '../button/';
import {auth} from '../../config/firebase.config.js';
import firebaseRequests from '../../shared/services/Firebase.service.js';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email,password);
      firebaseRequests.createUserProfileDocument(user, {displayName});
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    } catch (error) {
      console.error('sign up error', error);
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]:value} );
    }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='displayName'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirmPassword'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    )
  }
}

export default SignUp;