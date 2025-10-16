import React from 'react';
import {
  StyledGroup13,
  StyledAllspan,
  StyledProductspan,
  StyledClothesspan,
  StyledSportspan,
  StyledKidsspan,
  StyledDomesticspan,
  StyledSchoolspan,
  StyledShopiconsLightArrowForward,
  StyledVector,
  StyledVector01,
  StyledLine1,
  StyledLine101,
  StyledLine102,
  StyledLine103,
  StyledLine104,
  StyledLine105,
  StyledLine106,
} from './styled';

export const StyledSpan = () => {
  return (
    <StyledGroup13>
      <StyledLine1 />
      <StyledLine101 />
      <StyledLine102 />
      <StyledLine103 />
      <StyledLine104 />
      <StyledLine105 />
      <StyledLine106 />

      <StyledAllspan>All</StyledAllspan>
      <StyledProductspan>Product</StyledProductspan>
      <StyledClothesspan>Clothes</StyledClothesspan>
      <StyledSportspan>Sport</StyledSportspan>
      <StyledKidsspan>Kids</StyledKidsspan>
      <StyledDomesticspan>Domestic</StyledDomesticspan>
      <StyledSchoolspan>School</StyledSchoolspan>

      <StyledShopiconsLightArrowForward>
        <StyledVector />
        <StyledVector01 />
      </StyledShopiconsLightArrowForward>
    </StyledGroup13>
  );
};
