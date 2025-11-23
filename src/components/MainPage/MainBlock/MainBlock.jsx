import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, CtaButton, ButtonText, HeroImage } from './styled';
import { useNavigate } from 'react-router-dom';

export const MainBlock = ({ onShopNowClick }) => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroTitle>
        SHOP THE
        <br />
        BEST PRODUCTS
      </HeroTitle>

      <HeroSubtitle>We sell everything. Just grab it</HeroSubtitle>

      <CtaButton onClick={onShopNowClick}>
        <ButtonText
          onClick={() => {
            navigate('shop');
          }}
        >
          Shop Now
        </ButtonText>
      </CtaButton>

      <HeroImage src="/img/main-hero.png" />
    </HeroContainer>
  );
};
