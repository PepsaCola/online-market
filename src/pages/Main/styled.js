import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 60px;
  padding: 24px 84px;
  box-sizing: border-box;
  overflow-x: hidden;

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
