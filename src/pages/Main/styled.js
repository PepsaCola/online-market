import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 24px 84px;
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 20px 40px;
    gap: 40px;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    gap: 30px;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
