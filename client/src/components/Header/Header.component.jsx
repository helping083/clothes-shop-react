import React from 'react';
import { ReactComponent as Logo } from '../../global/crown.svg';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/'
import CartIcon from '../cart-icon/';
import {createStructuredSelector} from 'reselect';
import {selectcartHidden} from '../../store/cart/cart.selectors';
import {selectCurrentUser} from '../../store/user/user.selectors';
import {signOutStart} from '../../store/user/user.actions';
import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
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
        <OptionDiv onClick={signOutStart}>LOG OUT</OptionDiv>:
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)