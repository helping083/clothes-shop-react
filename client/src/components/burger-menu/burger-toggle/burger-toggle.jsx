import React from 'react';

import {BurgerToggleContainer, BurgerToggleLine} from './burger-toggle.styles'

const DrawerToggle = ({handleDrawerClick}) => (
  <BurgerToggleContainer onClick={handleDrawerClick}>
    <BurgerToggleLine></BurgerToggleLine>
    <BurgerToggleLine></BurgerToggleLine>
    <BurgerToggleLine></BurgerToggleLine>
  </BurgerToggleContainer>
);

export default DrawerToggle;