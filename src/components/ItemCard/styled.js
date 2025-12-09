import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Like } from '../../img/like.svg';
import { ReactComponent as Basket } from '../../img/basket.svg';
import { ReactComponent as Plus } from '../../img/plus.svg';

export const Container = styled(Link)`
  width: calc((100% - 78px) / 4);
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 15px;
  background: white;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  position: relative;

  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1024px) {
    padding: 30px 10px 80px 10px;
    width: 100%;
    height: auto;
  }
`;

export const Img = styled.img`
  width: 204px;
  height: 204px;
  align-self: center;

  @media (max-width: 1440px) {
    width: 140px;
    height: 140px;
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  color: black;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    word-break: break-all;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    word-break: break-all;
  }
`;

export const Price = styled.p`
  color: black;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    word-break: break-all;
  }
`;

export const LikeIconBack = styled.span`
  position: absolute;
  width: 52px;
  height: 50px;
  border-radius: 100px;
  top: 20px;
  right: 9px;
  background-color: #fecaca;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: #ef4444;
  }
`;

export const LikeIcon = styled(Like)`
  width: 28px;
  height: 23px;
  & path {
    fill: white;
  }
`;

export const BasketIconBack = styled.span`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  border: 1px #d9d9d9 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  .hover-icon {
    display: none;
  }
  &:hover {
    background-color: #4a6cf7;
    .default-icon {
      display: none;
    }
    .hover-icon {
      display: block;
    }
  }
`;

export const BasketIcon = styled(Basket)`
  width: 27px;
  height: 26px;
  & path {
    fill: #2740b9;
  }
`;

export const HoverIcon = styled(Plus)`
  width: 21px;
  height: 21px;
`;
