import React  from 'react'
import './button.styles.scss';
import {ButtonContainer} from './button.styles';

const Button = ({children, ...props}) => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  ) 
}

export default Button;