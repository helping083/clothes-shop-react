import styled, {css} from 'styled-components';

const burgerClosedStyles = css`
  transform: translateX(-100%);
`
const burgerActiveStyles = css`
  transform: translateX(0);
`
const setActive = ({opened}) => {
  return opened ? burgerActiveStyles : burgerClosedStyles;
}
export const BurgerContainer = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  ${setActive}
  transition: transform .5s ease-out;
  @media (min-width: 800px) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  height: 20%;
  margin-bottom: 32px;
`