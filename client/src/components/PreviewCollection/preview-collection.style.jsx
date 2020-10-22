import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  padding: 0px 20px;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    & .collectionItem {
      width: auto;
    }
  }

  @media screen and (max-width: 576px) { 
    grid-template-columns: 1fr;
    & .collectionItem {
      max-width: 100%;
      margin-bottom: 35px;
    }
  }
`;