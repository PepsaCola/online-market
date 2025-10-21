import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../img/arrow-bottom.svg';

export const FilterBox = styled.div`
  position: relative;
  display: inline-block;
`;
export const CustomSelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  padding: 13px 20px;
  background-color: white;
  border-radius: ${({ isOpen }) => (isOpen ? '20px 20px 0 0' : '30px')};
  color: #2740b9;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ isOpen }) => (isOpen ? '#2740b9' : 'transparent')};
  transition: all 0.3s;
  user-select: none;

  &:hover {
    background-color: #4a6cf7;
    color: white;
    box-shadow: none;
    border-color: #4a6cf7;
    & > svg {
      fill: white;
    }
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 14px;
  height: 8px;
  transition:
    transform 0.3s,
    fill 0.3s;
  fill: #2740b9;
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #2740b9;
  border-top: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
  overflow: hidden;
`;

export const DropdownItem = styled.li`
  padding: 12px 20px;
  color: #2740b9;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: #f0f5ff;
  }

  &:last-child {
    border-bottom: none;
  }
`;
