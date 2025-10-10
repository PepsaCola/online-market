import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../img/arrow-bottom.svg';

export const Container = styled.div`
  padding: 24px 84px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FilterWrap = styled.div`
  display: flex;
  gap: 30px;
`;
export const Filter = styled.span`
  display: inline-block;
  padding: 13px 35px;
  background-color: white;
  border-radius: 30px;
  color: #2740b9;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  &:hover {
    background-color: #4a6cf7;
    color: white;
    box-shadow: none;
    & svg {
      stroke: white;
    }
  }
`;
export const Sorted = styled.span`
  display: inline-block;
  padding: 13px 35px;
  background-color: white;
  border-radius: 30px;
  color: #2740b9;
  cursor: pointer;
  border: 1px solid #2740b9;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  &:hover {
    background-color: #4a6cf7;
    color: white;
    box-shadow: none;
    & svg {
      stroke: white;
    }
  }
`;
export const ArrowIcon = styled(Arrow)`
  transition: 0.3s;
  margin-left: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  gap: 26px;
  margin: 0 auto;
`;
