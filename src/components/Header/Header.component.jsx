import React from 'react';
import { ReactComponent as Logo } from '../../global/crown.svg';
import {auth} from '../../config/firebase.config';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/'
import CartIcon from '../cart-icon/';
import {createStructuredSelector} from 'reselect';
import {selectcartHidden} from '../../store/cart/cart.selectors';
import {selectCurrentUser} from '../../store/user/user.selectors';
import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv
} from './header.styles';

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>

      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser ? 
        <OptionDiv onClick={() => auth.signOut()}>LOG OUT</OptionDiv>:
        <OptionLink to="/auth">
          SIGN IN
        </OptionLink> 
      }

      <CartIcon/>
    </OptionsContainer>
    {!hidden && <CartDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectcartHidden
});

export default connect(mapStateToProps, null)(Header)