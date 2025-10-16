import React from 'react';
import { StyledGroup38, StyledViewAll } from './styled';

export const LoadMoreButton = ({ loading, isMoreToLoad, onLoadMore }) => {
  if (!isMoreToLoad) {
    return null;
  }

  const buttonText = loading ? 'Loading...' : 'View All';

  return (
    <StyledGroup38 onClick={onLoadMore} disabled={loading}>
      <StyledViewAll>{buttonText}</StyledViewAll>
    </StyledGroup38>
  );
};
