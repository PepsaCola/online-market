import styled from 'styled-components';
import { ReactComponent as ArrowRightIcon } from '../../../img/arrow-right.svg';

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid rgba(75, 71, 71, 0.68);
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    gap: 20px;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const NavItem = styled.span`
  font-size: 22px;
  word-wrap: break-word;
  cursor: pointer;
  position: relative;
  padding: 20px 0;
  flex-shrink: 0;

  color: ${({ active }) => (active ? '#2740b9' : '#333')};
  font-weight: ${({ active }) => (active ? '800' : '500')};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #2740b9;
  }

  &::after {
    content: '';
    display: ${({ active }) => (active ? 'block' : 'none')};
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2740b9;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 0;
  }
`;

export const ArrowRight = styled(ArrowRightIcon)`
  cursor: pointer;
  margin-left: 30px;
  margin-right: 0;

  @media (max-width: 768px) {
    margin-left: 15px;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
