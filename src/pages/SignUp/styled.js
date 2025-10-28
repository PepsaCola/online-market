import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerForLoginRoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: calc(100% - 31%);
`;

export const ForUserDescription = styled.span`
  color: black;
  font-size: 15px;
  font-weight: 300;
  align-self: flex-end;
`;

export const RouteToLogIn = styled(Link)`
  color: #2740b9;
  font-size: 15px;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
