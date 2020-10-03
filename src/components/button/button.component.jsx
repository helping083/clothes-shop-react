import React  from 'react'
import './button.styles.scss';

const Button = ({children, ...props}) => {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  ) 
}

export default Button;