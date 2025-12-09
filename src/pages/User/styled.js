import styled from 'styled-components';
import { ReactComponent as Camera } from '../../img/camera.svg';

export const Container = styled.div`
  padding: 24px 84px;
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
`;

export const InformationTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding: 20px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 21px;
  }
`;

export const EditInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 120px;
`;

export const Photo = styled.div`
  width: 120px;
  height: 100%;
  border-radius: 50%;
  padding: 30px;
  background: #fff;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const CameraIcon = styled(Camera)`
  width: 100%;
  height: 100%;
  & path {
    fill: black;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25%;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 640px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background: #ef4444;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dc2626;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 8px;
    padding: 16px 0 16px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  border-radius: 11px;
  color: black;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 24px;
  padding: 16px 36px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 20px;
    border-radius: 8px;
  }
`;

export const SignUpInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
`;

export const OrderLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const OrderRight = styled.div`
  width: 400px;
  flex-shrink: 0;
`;

export const OrderHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  margin-bottom: 20px;
  span {
    color: #6b7280;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 24px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .qty {
    font-size: 16px;
    color: #333;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #111;
  }
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
  background-color: #3b82f6;
`;

export const SummaryCard = styled.div`
  background-color: #f9fafb;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SummaryHeader = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 5px;
  color: #000;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }

  span {
    color: #6b7280;
    font-size: 14px;
  }

  p {
    margin: 0;
    font-weight: 600;
    font-size: 15px;
    color: #111;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;

  span:first-child {
    font-size: 16px;
    color: #111;
    font-weight: 600;
  }

  span:last-child {
    font-size: 20px;
    font-weight: 800;
    color: #111;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px; /* Відступ між різними замовленнями */
  width: 100%;
`;
