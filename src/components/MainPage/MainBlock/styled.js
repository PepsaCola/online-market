import styled from 'styled-components';

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 700px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
  background: linear-gradient(130deg, #2740b9 0%, #233578 63%, #1f2937 100%);
  align-items: flex-start;
  padding: 24px 84px 250px;

  @media (max-width: 768px) {
    padding: 50px 10px 10px 10px;
  }
`;

export const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  z-index: 2;
  white-space: pre-wrap;
  margin-bottom: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 40px;
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    width: 100%;
  }
`;

export const HeroSubtitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  color: white;
  font-size: 24px;
  font-weight: 400;
  word-wrap: break-word;
  z-index: 2;
  margin-top: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 24px;
    width: 100%;
    padding-bottom: 40px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const CtaButton = styled.button`
  width: 200px;
  height: 70px;
  background: #f99caf;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: background 0.3s ease;
  margin-top: 30px;

  &:hover {
    background: #e08b98;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
  }
`;

export const ButtonText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const HeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: auto;
  object-fit: contain;
  z-index: 1;
  max-height: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 40%;
  }
`;
