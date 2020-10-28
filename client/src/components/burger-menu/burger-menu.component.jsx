import React, {Fragment} from 'react';
import {BurgerContainer, LogoContainer} from './burger-menu.styles';
import PropTypes from 'prop-types';
import Backdrop from '../backdrop/';

const BurgerMenu = ({opened, handleCloseBurgerMenu}) => (
  <Fragment>
    <Backdrop handleBackDropClick={handleCloseBurgerMenu} opened={opened}/>
    <BurgerContainer opened={opened}>
      <LogoContainer>
        
      </LogoContainer>
      <nav>

      </nav>
    </BurgerContainer>
  </Fragment>
)

BurgerMenu.propTypes = {
  handleCloseBurgerMenu: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
}

BurgerMenu.defaultProps = {
  opened: false
}

export default BurgerMenu;