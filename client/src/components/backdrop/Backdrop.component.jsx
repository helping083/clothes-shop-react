import React, { Component } from 'react'
import {BackdropDiv} from './backdrop.styles';


const BackDrop = ({handleBackDropClick, opened}) => {
  return (
    <BackdropDiv
      opened={opened}
      onClick={()=>{
        handleBackDropClick()
      }}
    >
    </BackdropDiv>
  )
}

export default BackDrop;