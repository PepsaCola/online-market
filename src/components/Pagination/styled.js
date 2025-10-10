import styled from 'styled-components';
import { ReactComponent as Back } from '../../img/back-arrow.svg';
import { ReactComponent as Next } from '../../img/next-arrow.svg';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;

export const BackBtn = styled(Back)`
  width: 10px;
  height: 17px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  margin-right: 15px;
`;

export const NextBtn = styled(Next)`
  width: 10px;
  height: 17px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  margin-left: 15px;
`;

export const Dots = styled.span`
  color: #333;
  font-size: 16px;
`;

export const Number = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({ $active }) => ($active ? '#2740B9' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: ${({ $active }) => ($active ? '#2740B9' : 'rgba(39, 64, 185, 0.1)')};
    color: ${({ $active }) => ($active ? '#fff' : '#2740B9')};
  }
`;
