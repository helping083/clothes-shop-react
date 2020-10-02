import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Homepage/';
import ShopPage from './pages/ShopPage/';
import './App.css';
import Header from './components/Header/';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop'   component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
