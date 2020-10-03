import { render } from '@testing-library/react';
import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...props}) => {

  const renderLabel = () => (
    <label className={`${props.value.length ? 'shrinkg':''}`}></label>
  )

  return (
    <div className = 'group'>
      <input className="form-input" onChange={handleChange} {...props}/>
      {label && renderLabel() }
    </div>
  )
}

export default FormInput;