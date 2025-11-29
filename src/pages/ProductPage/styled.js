import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 90px 20px;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 850px) {
    padding: 40px 20px;
  }

  @media (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const ProductLayout = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 850px) {
    gap: 50px;
  }

  @media (max-width: 700px) {
    gap: 20px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const ProductImage = styled.img`
  width: 600px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 850px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 250px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const ProductInfo = styled.div`
  flex: 0.75;
  width: 100%;

  h1 {
    font-size: 36px;
    font-weight: bold;
    word-wrap: break-word;
  }

  p {
    font-size: 64px;
    font-weight: bold;
    margin-top: 64px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 48px;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 0 20px;
    flex: 1;

    p {
      margin-top: 24px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 32px;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const ProductBtn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 32px;
  width: 100%;
`;

export const ProductCartBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: 16px;
  flex: 1;
  border: 0.5px solid #acacac;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 700px) {
    padding: 10px;
    font-size: 14px;
  }

  background-color: ${(props) => (props.isActive ? 'white' : '#4A6CF7')};
  color: ${(props) => (props.isActive ? '#595959' : 'white')};

  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }

  &:active {
    transform: scale(0.98);
    background-color: #e0e0e0;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: #f0f0f0;
      color: #333;
      border: 1px solid #ccc;

      &:hover {
        background-color: #e0e0e0;
        color: black;
      }
    `}
`;

export const ProductLikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 12px;
  border: 0.5px solid #acacac;
  transition: 0.3s;
  border-radius: 8px;
  font-size: 24px;

  background-color: white;
  color: ${(props) => (props.$isActive ? '#EF4444' : '#595959')};

  &:hover {
    background-color: white;
    border: 0.5px solid #acacac;
    color: #ef4444;
  }

  &:active {
    transform: scale(0.98);
    background-color: #2740b9;
  }
  @media (max-width: 700px) {
    padding: 5px 10px;
  }
`;

/***************/
/*TABS CONTAINER*/
/****************/

export const ProductDetails = styled.div`
  width: 100%;
  margin-top: 80px;

  ul {
    display: flex;
    justify-content: center;
  }
`;

const activeStylesButton = css`
  color: #2740b9;
  border-bottom: 3px solid #2740b9;
  font-weight: 700;
`;

const inactiveStylesButton = css`
  color: black;
  border-bottom: 1px solid black;
  font-weight: 400;

  &:hover {
    color: #2740b9;
    border-bottom: 1px solid #2740b9;
  }
`;

export const TabButton = styled.button`
  padding: 12px 30px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  transition: all 0.2s;

  ${(props) => (props.isActive ? activeStylesButton : inactiveStylesButton)};
`;

export const TabContent = styled.div`
  background-color: white;
  padding: 52px 80px;
  margin-top: 52px;
  border-radius: 20px;

  li {
    list-style: none;
    line-height: 1.6;
  }
`;

export const ProductsNavWrap = styled.div`
  display: flex;
  gap: 62px;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    margin-top: 40px;
  }

  @media (max-width: 450px) {
    gap: 20px;
  }
`;
export const ProductsNav = styled.ul`
  display: flex;
`;
export const ProductsNavLink = styled(NavLink)`
  padding: 16px 27px;
  border-bottom: 1px solid black;
  color: black;
  text-decoration: none;
  &.active {
    padding-bottom: 14px;
    color: #2740b9;
    border-bottom: 3px solid #2740b9;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
