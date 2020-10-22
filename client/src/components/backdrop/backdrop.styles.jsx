import styled, { css } from 'styled-components';

const backDropOpened = css`
  background-color: black;
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
`
const backDropClosed = css`
  background-color: transparent;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: -1;
`
const getBackdrop = ({opened}) => opened ? backDropClosed : backDropOpened

export const BackdropDiv = styled.div`
  position: absolute;
  width: 100vh;
  height: 100vh;
  ${getBackdrop}
`