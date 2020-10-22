import styled from 'styled-components';

export const BurgerToggleContainer = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`

export const BurgerToggleLine = styled.div`
  width: 90%;
  height: 3px;
  background-color: black;
`