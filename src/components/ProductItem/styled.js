import styled from 'styled-components';
import { ReactComponent as Remove } from '../../img/close.svg';

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

export const BaseButton = styled.button`
  flex-basis: 150px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  text-align: center;
  transition: all 0.2s ease;
`;

export const ActionButton = styled(BaseButton)`
  background-color: #4a69e2;
  color: white;
  margin-right: 10px;
  flex-basis: 10%;

  &:hover {
    background-color: #3a52b2;
  }
`;

export const RemoveIcon = styled(Remove)`
  cursor: pointer;
  flex-basis: 10%;
`;
