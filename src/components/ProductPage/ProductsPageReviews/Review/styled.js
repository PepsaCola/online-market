import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AvatarWrap = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 15px;
  align-items: center;

  @media (max-width: 450px) {
    gap: 16px;
  }
`;
export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #2740b9;

  @media (max-width: 700px) {
    width: 42px;
    height: 42px;
  }

  @media (max-width: 450px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 360px) {
    width: 20px;
    height: 20px;
  }
`;
export const Name = styled.p`
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;
export const Text = styled.p`
  margin-top: 32px;
`;
export const StarsContainer = styled.div`
  display: flex;
  color: #ffc107;
  font-size: 25px;
`;
