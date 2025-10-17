import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
  background: linear-gradient(130deg, #2740b9 0%, #233578 63%, #1f2937 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 84px;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  z-index: 2;
  white-space: pre-wrap;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const HeroSubtitle = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 400;
  word-wrap: break-word;
  z-index: 2;
  margin-top: 0;
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
`;
