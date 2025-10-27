import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SignInBtn = styled(Link)`
  width: 250px;
  height: 60px;
  border-radius: 8px;
  border: 1px #b0cefc solid;
  color: #b0cefc;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgotKeyBtn = styled(Link)`
  color: #2740b9;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    text-decoration: underline;
  }
`;
