import React from 'react';
import { PrimaryButton, ButtonText, ButtonWrapper } from './styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <PrimaryButton onClick={onClick}>
        <ButtonText>View All</ButtonText>
      </PrimaryButton>
    </ButtonWrapper>
  );
};
