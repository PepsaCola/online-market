import styled from 'styled-components';
import { ReactComponent as Like } from '../../img/like.svg';
import { ReactComponent as Basket } from '../../img/basket.svg';
import { ReactComponent as Account } from '../../img/account.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 40px;
  @media (max-width: 990px) {
    padding: 14px 20px;
  }
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  color: black;
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const Wrap = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const LikeIcon = styled(Like)`
  cursor: pointer;
`;

export const BasketLink = styled(Link)`
  text-decoration: none;
  position: relative;
  p {
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;

    position: absolute;
    bottom: 0;
    right: -10px;
  }
`;
export const BasketIcon = styled(Basket)`
  cursor: pointer;
`;

export const AccountIcon = styled(Account)`
  cursor: pointer;
`;

export const LikeLink = styled(Link)`
  text-decoration: none;
  position: relative;

  p {
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;

    position: absolute;
    bottom: 0;
    right: -10px;
  }
`;

export const Burger = styled.img`
  cursor: pointer;
  display: none;
  width: 27px;
  height: 27px;
  @media (max-width: 990px) {
    display: block;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);

  transform: ${({ isOpened }) => (isOpened ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const MenuText = styled.span``;
export const MenuItem = styled(Link)`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  opacity: ${({ isOpened }) => (isOpened ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
`;
