import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

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

export default FormInput;