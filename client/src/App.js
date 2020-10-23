import React, {useEffect, Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header/';
import Spinner from './components/spinner/'
import {selectCurrentUser} from './store/user/user.selectors';
import {CheckUserSession} from './store/user/user.actions';
import {createStructuredSelector} from 'reselect';
import axios from 'axios';
import {GlobalStyles} from './global.styles';

const HomePage = lazy(()=> import('./pages/Homepage/'))
const ShopPage = lazy(() => import('./pages/ShopPage/'));
const CheckoutPage = lazy(() => import('./pages/Checkout'))
const SignInPage = lazy(() => import('./pages/SignInPage/'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
// todo: uuid
// todo: propTypes
const App = ({ checkUserSession, currentUser }) => {
  useEffect(()=>{
    axios.get('/ping')
      .then(data => console.log('ping', data))
      .catch(err => console.log(err));
    checkUserSession()
  },[checkUserSession])
  
  return (
    <div className='App'>
      <GlobalStyles/>
      <Header/>
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/auth'>
            {currentUser ? <Redirect to='/'/>: <SignInPage/>}
          </Route>
          <Route exact path='/signUp'>
            {currentUser ? <Redirect to='/'/>: <SignUpPage/>}
          </Route>
          <Route exact path='/' component={HomePage}/>
          <Redirect to="/" />
        </Switch>
      </Suspense>
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
