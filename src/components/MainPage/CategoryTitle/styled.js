import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 32px;
  font-weight: normal;
  color: #333;
  padding: 0 84px;
  margin-top: 40px;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    font-size: 24px;
    padding: 0;
  }
`;
