import styled from 'styled-components';

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 48px;
  flex-basis: 100%;
  &:last-child {
    border-bottom: none;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 50%;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  margin-right: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: left;
  flex-basis: 30%;
`;
