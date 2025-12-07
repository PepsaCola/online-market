import styled from 'styled-components';
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const BackGroundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 64%;
  gap: 40px;
`;

export const Form = styled.form`
  width: calc(100% - 31%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 120px 100px;
  gap: 20px;
  @media (max-width: 990px) {
    width: 100%;
    padding: 20px 50px;
  }
`;
export const BackGround = styled.div`
  width: 52%;
  height: 100%;
  background: linear-gradient(180deg, #2740b9 0%, #111d53 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const Description = styled.span`
  color: #b0cefc;
  font-size: 24px;

  font-weight: 400;
`;
export const Title = styled.h1`
  color: #b0cefc;
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 990px) {
    font-size: 20px;
  }
`;
export const FormTitle = styled.h2`
  color: #2740b9;
  width: 100%;
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 990px) {
    font-size: 25px;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  border-radius: 11px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 10px 30px;
  @media (max-width: 990px) {
    font-size: 15px;
    padding: 10px 15px;
  }
`;

export const AccountBtn = styled.button`
  width: 100%;
  background: #4a6cf7;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.3s ease;
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 18px;
  &:hover {
    background: #2740b9;
  }
  &:active {
    transform: scale(0.99);
  }
`;
