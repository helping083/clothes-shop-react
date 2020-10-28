import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';
import PropTypes from 'prop-types';

const FormInput = ({handleChange, label, ...props}) => {

  const renderLabel = () => (
    <FormInputLabel className={props.value.length ? 'shrink' : ''}>
      {label}
    </FormInputLabel>
  )

  return (
    <GroupContainer>
      <FormInputContainer className="form-input" onChange={handleChange} {...props}/>
      {label && renderLabel() }
    </GroupContainer>
  )
}

FormInput.proptype = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default FormInput;