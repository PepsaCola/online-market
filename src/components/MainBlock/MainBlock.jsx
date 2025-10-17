import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, CtaButton, ButtonText, HeroImage } from './styled';

export const MainBlock = ({ onShopNowClick }) => {
  return (
    <HeroContainer>
      <HeroTitle>
        SHOP THE <br /> BEST PRODUCTS
      </HeroTitle>

      <HeroSubtitle>We sell everything. Just grab it</HeroSubtitle>

      <CtaButton onClick={onShopNowClick}>
        <ButtonText>Shop Now</ButtonText>
      </CtaButton>

      <HeroImage src="/img/main-hero.png" />
    </HeroContainer>
  );
};
