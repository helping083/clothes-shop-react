import React from 'react'
import {BackdropDiv} from './backdrop.styles';
import PropTypes from 'prop-types';

const BackDrop = ({handleBackDropClick, opened}) => {
  return (
    opened ? 
    <BackdropDiv
      opened={opened}
      onClick={()=>{
        handleBackDropClick()
      }}
    >
    </BackdropDiv> :null
  )
}

BackDrop.propTypes = {
  handleBackDropClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
}

BackDrop.defaultProps = {
  opened: false
}

export default BackDrop;