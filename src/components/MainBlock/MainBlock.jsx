import React from 'react';
import {
  StyledGroup52,
  StyledShopTheBestProducts,
  StyledWeSellEverythingJustGrabIt,
  StyledRectangle4,
  StyledShopNow,
  StyledHeroImage,
} from './styled';

export const MainBlock = ({ onShopNowClick }) => {
  return (
    <StyledGroup52>
      <StyledShopTheBestProducts>
        SHOP THE
        <br />
        BEST PRODUCTS
      </StyledShopTheBestProducts>

      <StyledWeSellEverythingJustGrabIt>
        <br />
        We sell everything. Just grab it
      </StyledWeSellEverythingJustGrabIt>

      <StyledRectangle4 onClick={onShopNowClick}>
        <StyledShopNow>Shop Now</StyledShopNow>
      </StyledRectangle4>

      <StyledHeroImage src="/img/main-hero.png" alt="Product Image" />
    </StyledGroup52>
  );
};
