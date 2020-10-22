import styled from 'styled-components';

export const CollectionPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1600px;
`

export const TitleH2 = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > .collectionItem {
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
      width: 30vw;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`