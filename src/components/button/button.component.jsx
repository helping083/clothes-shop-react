import React  from 'react'
import './button.styles.scss';

const Button = ({children, isGoggleSignIn,...props}) => {
  return (
    <button 
      className={`${isGoggleSignIn ? 'google-sign-in': ''} custom-button`} 
      {...props}
    >
      {children}
    </button>
  ) 
}

export default Button;