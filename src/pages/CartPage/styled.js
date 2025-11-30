import styled from 'styled-components';

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: start;
  gap: 32px;
  margin: 64px 80px;

  @media (max-width: 1250px) {
    grid-template-columns: 2fr 1fr;
    margin: 64px 20px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    margin: 20px 40px;
  }

  @media (max-width: 450px) {
    margin: 20px 20px;
  }
`;

export const PaymentContainer = styled.div`
  background-color: #e9f2ff;
  border-radius: 8px;
  padding: 32px;

  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;

  @media (max-width: 950px) {
    font-size: 24px;
  }
`;

export const PaymentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  label {
    font-size: 16px;
    color: #333;
  }

  input {
    border: none;
    border-radius: 11px;
    font-size: 16px;
    padding: 10px;
    color: #333;
    font-weight: 300;
    font-family: inherit;
  }

  button {
    background: #4a6cf7;
    color: #fff;
    padding: 13px;
    font-family: inherit;
    border: none;
    border-radius: 11px;
    font-size: 16px;

    &:hover {
      background: #2740b9;
    }
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

/*********/
/*Cart Info*/
export const CartInfo = styled.div`
  @media (max-width: 950px) {
    h1 {
      font-size: 26px;
    }
  }
`;

export const CartItemsContainer = styled.div`
  padding: 32px 0;

  .cart-header {
    display: grid;
    grid-template-columns: 3fr 1.5fr 1fr 0.5fr;
    align-items: center;
    margin-bottom: 23px;

    h3 {
      font-size: 16px;
      color: #333333;
      font-weight: 500;
    }
  }

  @media (max-width: 650px) {
    padding: 16px 0;

    .cart-header {
      display: none;
    }
  }
`;

export const CartItemsList = styled.ul`
  li {
    display: grid;
    grid-template-columns: 3fr 1.5fr 1fr 0.5fr;
    align-items: center;
    padding: 4px;
  }

  div {
    display: flex;
  }

  img {
    max-width: 100px;
  }

  .item-title,
  .options {
    padding: 8px 16px;
  }

  p {
    font-size: 18px;
  }

  .delete_btn {
    border: none;
    background: inherit;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: #ff4d4f;
    }
  }

  .option-box {
    display: flex;
    flex-direction: column;
  }

  .options {
    color: #666;
    font-size: 12px;
  }

  @media (max-width: 650px) {
    li {
      display: grid;
      grid-template-columns: 80px 1fr 30px;
      grid-template-areas:
        'image title delete'
        'image controls controls';
      gap: 15px;
      padding: 20px 0;
      align-items: start;
      position: relative;
    }

    li > div:first-child {
      display: contents;
    }

    img {
      grid-area: image;
      width: 80px;
      height: 80px;
      object-fit: contain;
      align-self: center;
    }

    li > div:first-child > div {
      grid-area: title;
      padding: 0;
      padding-right: 30px;
    }

    .item-title {
      padding: 0;
      margin-bottom: 5px;
      font-size: 16px;
    }

    .delete_btn {
      grid-area: delete;
      position: absolute;
      top: 20px;
      right: 0;
    }

    li > :nth-child(2) {
      grid-area: controls;
      justify-self: start;
      align-self: center;
    }

    li > p {
      grid-area: controls;
      justify-self: end;
      align-self: center;
      margin: 0;
    }
  }

  @media (max-width: 400px) {
    li {
      grid-template-columns: min-content 1fr;
      grid-template-areas:
        'image title'
        'quantity price';
      gap: 5px;
    }

    /* Картинка */
    img {
      grid-area: image;
      width: 70px;
      height: 70px;
      justify-self: center;
    }

    li > :nth-child(2) {
      grid-area: quantity;
      justify-self: center;
      transform: scale(0.85);
      transform-origin: top center;
      margin-top: 5px;
    }

    li > p {
      grid-area: price;
      justify-self: end;
      font-size: 20px;
    }

    li > div:first-child > div {
      padding-right: 25px;
    }
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: stretch;
  width: fit-content;

  border-radius: 11px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  overflow: hidden;

  p {
    margin: 0;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    max-width: 60px;
  }

  button {
    background-color: #f5f7fa;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: #444;
      font-size: 20px;
    }
  }

  button:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 1450px) {
    button {
      padding: 5px 10px;
    }
    p {
      padding: 5px 10px;
      min-width: 40px;
    }
  }
`;

export const TotalPrice = styled.h2`
  padding: 32px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 650px) {
    padding: 0;
  }
`;
