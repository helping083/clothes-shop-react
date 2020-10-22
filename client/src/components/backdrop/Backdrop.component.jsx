import React, { Component } from 'react'
import {BackdropDiv} from './backdrop.styles';


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

export default BackDrop;