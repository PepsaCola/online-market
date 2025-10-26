import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 90px 20px;

  * {
    box-sizing: border-box;
  }
`;

export const ProductLayout = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductImage = styled.img`
  width: 600px;
  border-radius: 20px;
`;

export const ProductInfo = styled.div`
  flex: 0.75;
  min-width: 0;

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
`;

export const ProductBtn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 32px;
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
  color: #2740b9;

  background-color: white;
  color: ${(props) => (props.isActive ? '#EF4444' : '#595959')};

  &:hover {
    background-color: white;
    border: 0.5px solid #acacac;
    color: #ef4444;
  }

  &:active {
    transform: scale(0.98);
    background-color: #2740b9;
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
