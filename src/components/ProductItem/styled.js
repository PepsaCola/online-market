import styled from 'styled-components';
import { ReactComponent as Remove } from '../../img/close.svg';

export const ItemRow = styled.tr`
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 24px 0;
  vertical-align: middle;

  /* Перша колонка (Інфо) */
  &:first-child {
    padding-left: 32px;
    width: 50%;
  }

  /* Третя колонка (Кнопка на десктопі) */
  &:nth-child(3) {
    /* Приховуємо всю колонку на мобільному */
    @media (max-width: 990px) {
      display: none;
    }
  }

  /* Остання колонка (Хрестик + Мобільна кнопка) */
  &:last-child {
    padding-right: 32px;
    text-align: right;
  }

  @media (max-width: 990px) {
    padding: 16px 0; /* Трохи зменшив паддінги для мобільного */

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
      /* Важливо для вирівнювання іконки та кнопки стовпчиком */
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
  }
`;

// --- Внутрішні елементи рядка ---

// ProductDetails залишається div, щоб картинка і текст були flex-рядком всередині клітинки
export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  margin-right: 1.5rem;
  @media (max-width: 990px) {
    width: 40px;
    height: 40px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const BaseButton = styled.button`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  text-align: center;
  transition: all 0.2s ease;
  @media (max-width: 990px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const ActionButton = styled(BaseButton)`
  background-color: #4a69e2;
  color: white;
  white-space: nowrap;

  &:hover {
    background-color: #3a52b2;
  }
`;
export const MobileActionButton = styled(ActionButton)`
  display: none;
  margin-top: 10px;
  @media (max-width: 990px) {
    display: inline-block;
  }
`;
export const RemoveIcon = styled(Remove)`
  cursor: pointer;
  display: block;
  margin-left: auto; /* Щоб іконка була притиснута вправо, якщо потрібно */
`;
