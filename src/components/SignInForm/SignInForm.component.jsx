import React from 'react';
import FormInput from '../FormInput/';
import './signIn.styles.scss';
import { signInWithGoogle } from '../../config/firebase.config';
import Button from '../button/';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email: '', password: ''})
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign in with your email and password</span>
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
      </div>
    )
  }
}

export default SignInForm