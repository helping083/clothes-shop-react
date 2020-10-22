import styled, { css } from 'styled-components';

const backDropOpened = css`
  background-color: black;
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  background-color: rgba(0,0,0,0.5);
`
const backDropClosed = css`
  background-color: transparent;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: -1;
  transition: 2s;
  @keyframes example {
    0%   {background-color: rgba(0,0,0,0.1);}
    100% {background-color: rgba(0,0,0,0.5);}
  } 
`
const getBackdrop = ({opened}) => opened ? backDropClosed : backDropOpened

export const BackdropDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
`