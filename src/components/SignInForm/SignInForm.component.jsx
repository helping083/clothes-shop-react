import React from 'react';

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
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="email" 
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>email</label>

          <input 
            name="password" 
            type="password" 
            onChange={this.handleChange}
            value={this.state.password} 
            required
          />
          <label>password</label>

          <input name="email" type="submit" value="submit form"/>
        </form>
      </div>
    )
  }
}

export default SignInForm