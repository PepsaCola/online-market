import styled from 'styled-components';
import { ReactComponent as Camera } from '../../img/camera.svg';

export const Container = styled.div`
  padding: 24px 84px;
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const InformationTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding: 20px;
  text-align: center;
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
`;
export const EditButton = styled.button`
  width: 160px;
  height: 60px;
  border-radius: 8px;
  background: #4a6cf7;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 10px;
  transition: background-color 0.2s ease-in-out;
`;

export const DeleteButton = styled.button`
  width: 160px;
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
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  border-radius: 11px;
  color: black;
  font-size: 24px;
  font-weight: 400;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 16px 36px;
`;

export const SignUpInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
