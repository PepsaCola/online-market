import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 84px;
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  @media (max-width: 990px) {
    padding: 24px 20px;
  }
`;

export const WishListBlock = styled.div`
  width: 100%;
  left: 0px;
  top: 0px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding: 20px;
`;
