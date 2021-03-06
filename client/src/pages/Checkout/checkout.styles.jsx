import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  button {
    margin: 50px;
  }
`

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 576px) {
    width: 19%;
    font-size: 12px;
    &:last-child {
      width: 11%;
    }
  }
`

export const TotalBlock = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

export const WarningDiv = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`

export const StrButton = styled.button`
  margin: 50px 0px;
`