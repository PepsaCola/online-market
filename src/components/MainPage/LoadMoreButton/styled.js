import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  padding-top: 0;
`;

export const PrimaryButton = styled.button`
  width: 160px;
  height: 60px;
  border-radius: 8px;
  background: #4a6cf7;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #3a58d4;
  }
`;

export const ButtonText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 400;
  word-wrap: break-word;
`;
