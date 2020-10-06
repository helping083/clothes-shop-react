import React  from 'react'
import './button.styles.scss';

const Button = ({children, isGoggleSignIn, inverted,...props}) => {
  console.log(inverted);
  return (
    <button 
      className={`${inverted ? 'inverted': ''}${isGoggleSignIn ? 'google-sign-in': ''} custom-button`} 
      {...props}
    >
      {children}
    </button>
  ) 
}

export default Button;