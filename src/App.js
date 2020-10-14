import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/Homepage/';
import ShopPage from './pages/ShopPage/';
import SignInPage from './pages/SignInPage/';
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header/';
import {selectCurrentUser} from './store/user/user.selectors';
import {CheckUserSession} from './store/user/user.actions';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/Checkout';
// todo: uuid
const App = ({ checkUserSession, currentUser }) => {
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])
  
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/auth'>
          {currentUser ? <Redirect to='/'/>: <SignInPage/>}
        </Route>
        <Route exact path='/' component={HomePage}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})  

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(CheckUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
