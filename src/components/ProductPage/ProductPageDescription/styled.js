import styled from 'styled-components';

export const ProductsNavResultBox = styled.div`
  background-color: white;
  padding: 52px 80px;
  border-radius: 20px;
  width: 100%;

  @media (max-width: 850px) {
    padding: 32px 60px;
  }
`;
export const Text = styled.p`
  font-size: 20px;

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;
