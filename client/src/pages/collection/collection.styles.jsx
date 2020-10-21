import styled, { css } from 'styled-components';

export const CollectionPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const TitleH2 = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`

export const CollectionItemStyle =  css`
  margin-bottom: 30px;
`