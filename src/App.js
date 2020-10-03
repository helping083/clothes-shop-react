import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/Homepage/';
import ShopPage from './pages/ShopPage/';
import SignInPage from './pages/SignInPage/';
import './App.css';
import Header from './components/Header/';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
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
