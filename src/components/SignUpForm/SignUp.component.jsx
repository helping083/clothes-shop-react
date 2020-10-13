import React, { Component } from 'react'
import './sign-up.styles.scss';
import FormInput from '../FormInput/';
import Button from '../button/';
import {connect} from 'react-redux';
import { signUpStart } from '../../store/user/user.actions';

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
    const {signUpStart} = this.props;
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return
    }
    signUpStart({displayName, email, password})
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]:value} );
  }

  renderForm = () => {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
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
    )
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        {this.renderForm()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);