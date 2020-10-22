import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`
const hiddenOnMobile = css`
  @media (max-width: 800px) {
    display: none;
  }
`
export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px 80px;
  max-width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 992px) {
    padding: 10px 60px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
  ${hiddenOnMobile}
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyle}
  ${hiddenOnMobile}
`

export const OptionDiv = styled.div`
  ${OptionContainerStyle}
  ${hiddenOnMobile}
`