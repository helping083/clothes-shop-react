import styled from 'styled-components';

export const HomepageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 1600px) {
    padding: 10px 60px;
    max-width: 1600px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1170px) {
    padding: 10px;
  }
`;
