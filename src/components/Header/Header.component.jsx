import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../global/crown.svg';
import {auth} from '../../config/firebase.config';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/';
import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className='options'>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>LOG OUT</div>:
        <Link className="option" to="/auth">
          SIGN IN
        </Link>
      }
      <CartIcon/>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps, null)(Header)