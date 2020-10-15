import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...props}) => {

  const renderLabel = () => (
    <label className={`${props.value.length ? 'shrink':''} form-input-label`}>
      {label}
    </label>
  )

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props}/>
      {label && renderLabel() }
    </div>
  )
}

export default FormInput;