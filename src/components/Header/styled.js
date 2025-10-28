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
