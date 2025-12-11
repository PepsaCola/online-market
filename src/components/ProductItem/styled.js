import styled from 'styled-components';
import { ReactComponent as Remove } from '../../img/close.svg';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: #b0b0b0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    position: relative;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    gap: 12px;
  }
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-right: 20px;
  }
`;

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
  }
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AddToCartBtn = styled.button`
  background-color: #4a69e2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #3a52b2;
  }

  @media (max-width: 768px) {
    flex: 1;
    padding: 12px;
  }
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: color 0.2s;

  &:hover {
    color: #ff4d4f;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px;
  }
`;

export const RemoveIconStyled = styled(Remove)`
  width: 20px;
  height: 20px;

  path {
    fill: currentColor;
  }
`;
