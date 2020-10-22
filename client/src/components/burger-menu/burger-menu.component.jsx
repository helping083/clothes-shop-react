import React, {Fragment} from 'react';
import {BurgerContainer, LogoContainer} from './burger-menu.styles';
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

export default BurgerMenu;