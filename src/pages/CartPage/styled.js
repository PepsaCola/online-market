import styled from 'styled-components';

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  margin: 64px 80px;
`;

export const PaymentContainer = styled.div`
  background-color: #e9f2ff;
  border-radius: 8px;
  padding: 32px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
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
`;

/*********/
/*Cart Info*/
export const CartInfo = styled.div``;

export const CartItemsContainer = styled.div`
    padding: 32px 0;
    
    .cart-header{
        display: grid;
        grid-template-columns:  3fr 1.5fr 1fr 0.5fr; 
        align-items: center;
        margin-bottom: 23px;

        h3 {
            font-size: 16px;
            color: #333333;
            font-weight: 500;
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
  }

  .option-box {
    display: flex;
    flex-direction: column;
  }

  .options {
    color: #666;
    font-size: 12px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
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
    text-align: center;
    min-width: 60px;
    max-width: 60px;
  }

  button {
    background-color: #f5f7fa;
    border: none;
    padding: 12px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #444;
      font-size: 20px;
    }
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

export const TotalPrice = styled.h2`
  padding: 32px;
  display: flex;
  justify-content: flex-end;
`;
