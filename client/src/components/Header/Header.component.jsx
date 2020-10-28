import React, {useState, Fragment} from 'react';
import { ReactComponent as Logo } from '../../global/crown.svg';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/'
import CartIcon from '../cart-icon/';
import {createStructuredSelector} from 'reselect';
import {selectcartHidden} from '../../store/cart/cart.selectors';
import {selectCurrentUser} from '../../store/user/user.selectors';
import {signOutStart} from '../../store/user/user.actions';
import {BurgerToggle} from '../burger-menu/';
import BurgerMenu from '../burger-menu/';
import PropTypes from 'prop-types';
import {
  HeaderContainer, 
  LogoContainer, 
  OptionsContainer, 
  OptionLink, 
  OptionDiv
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => {
  console.log('currentUser', currentUser)
  const [openedBurger, setOpenedBurger] = useState(false);
  
  const handleToggleBurgerMenuState = () => {
    setOpenedBurger(openedBurger => !openedBurger)
  }

  const handleCloseBurgerMenu = () => {
    setOpenedBurger(false);
  }
  const renderSinInAndSignUp = () => (
    <>
      {
        currentUser ? 
        <OptionDiv onClick={signOutStart}>LOG OUT</OptionDiv>:
        <Fragment>
          <OptionLink to="/auth">
            SIGN IN
          </OptionLink>
          <OptionLink to="/signUp">
            SIGN UP
          </OptionLink> 
        </Fragment>
      }
    </>
  )
  return (
    <HeaderContainer>
      <BurgerToggle handleDrawerClick={handleToggleBurgerMenuState}/>
      <BurgerMenu 
        opened={openedBurger}
        handleCloseBurgerMenu={handleCloseBurgerMenu}
      />
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

        {renderSinInAndSignUp()}
        <CartIcon/>
      </OptionsContainer>
      {!hidden && <CartDropdown/>}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectcartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

Header.propTypes = {
  signOutStart: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  hidden: PropTypes.bool.isRequired
}

Header.defaultProps = {
  hidden: false,
  currentUser: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)