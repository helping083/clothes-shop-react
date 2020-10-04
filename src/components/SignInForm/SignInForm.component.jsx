import React from 'react';
import FormInput from '../FormInput/';
import './signIn.styles.scss';
import { signInWithGoogle } from '../../config/firebase.config';
import Button from '../button/';
import firebaseService from '../../shared/services/Firebase.service.js';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      await firebaseService.signIn(email, password);
      this.setState({email: '', password: ''})
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  renderForm = () => (
    <form onSubmit={this.handleSubmit}>
      <FormInput
        name="email" 
        type="email" 
        label="email"
        value={this.state.email}
        handleChange={this.handleChange}
        required
      />

      <FormInput 
        name="password" 
        type="password"
        label="password"
        handleChange={this.handleChange}
        value={this.state.password} 
        required
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Button name="submit" type="submit" value="submit form">submit</Button>
        <Button
          type="button" 
          onClick={signInWithGoogle} 
          isGoggleSignIn
        >google</Button>
      </div>
    </form>
  )

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign in with your email and password</span>
        {this.renderForm()}
      </div>
    )
  }
}

export default SignInForm