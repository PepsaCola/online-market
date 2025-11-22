import React from 'react';
import { Products } from '../../components/FavoritePage/Products/Products';
import { Container, WishListBlock, CategoryTitle } from './styled';

export const Favorite = () => {
  return (
    <Container>
      <WishListBlock>
        <CategoryTitle>Wishlist</CategoryTitle>
        <Products />
      </WishListBlock>
    </Container>
  );
};
