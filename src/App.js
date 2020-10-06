import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/Homepage/';
import ShopPage from './pages/ShopPage/';
import SignInPage from './pages/SignInPage/';
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header/';
import {auth} from './config/firebase.config';
import createUserProfileDocument from './shared/services/Firebase.service.js';
import {setCurrentUser} from './store/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument.createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } 
      setCurrentUser(user);
    })
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route path='/shop'   component={ShopPage}/>
          <Route exact path='/auth'>
            {this.props.currentUser ? <Redirect to='/'/>: <SignInPage/>}
          </Route>
          <Route exact path='/' component={HomePage}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})  

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
