import styled from 'styled-components';
import { ReactComponent as Camera } from '../../img/camera.svg';

export const Container = styled.div`
  padding: 24px 84px;
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    padding: 24px 20px;
  }
`;

export const InformationTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding: 20px 0;
  border-bottom: 2px solid #f3f4f6;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    font-size: 24px;
  }
`;

export const EditInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #eee;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const CameraIcon = styled(Camera)`
  width: 100%;
  height: 100%;
  path {
    fill: #333;
  }
`;

export const Buttons = styled.div`
  width: 200px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background: #ef4444;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #dc2626;
  }
`;

export const SignUpInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const LeftInfo = styled.div`
  flex: 1;
`;
export const RightInfo = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #555;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #333;
  font-size: 16px;
  padding: 12px 16px;
  outline: none;
  &:focus {
    border-color: #3b82f6;
  }
`;

export const OrderBlock = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  padding-bottom: 40px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const OrderTableArea = styled.div`
  flex: 1;
  width: 100%;
`;

export const OrderSummaryArea = styled.div`
  width: 350px;
  flex-shrink: 0;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse; /* Важливо для таблиць */
  background: white;
`;

export const TableHead = styled.thead`
  background-color: #f9fafb;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 16px 24px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export const TableCell = styled.td`
  padding: 20px 24px;
  vertical-align: middle;
  color: #333;
  font-size: 16px;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .info-text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #111;
    }

    span {
      font-size: 13px;
      color: #6b7280;
    }
  }
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f3f4f6;
  border: 1px solid #eee;
`;

export const SummaryCard = styled.div`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SummaryHeader = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .date {
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  span {
    color: #6b7280;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    color: #111;
    word-break: break-word;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
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
