import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/Homepage/';
import ShopPage from './pages/ShopPage/';
import SignInPage from './pages/SignInPage/';
import './App.css';
import Header from './components/Header/';
import {auth} from './config/firebase.config';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged((user) => {
      this.setState({currentUser:user});
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/shop'   component={ShopPage}/>
          <Route path='/auth'   component={SignInPage}/>
          <Route exact path='/' component={HomePage}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
