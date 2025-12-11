import React from 'react';
import { useWishlist } from '../../../features/products/favorite';
import { ProductItem } from '../../ProductItem/ProductItem';
import { ProductsContainer, ListWrapper, EmptyWrapper, EmptyText } from './styled';

export const Products = () => {
  const { wishlist } = useWishlist();

  if (!wishlist || wishlist.length === 0) {
    return (
      <EmptyWrapper>
        <EmptyText>Список обраного порожній.</EmptyText>
      </EmptyWrapper>
    );
  }

  return (
    <ProductsContainer>
      <ListWrapper>
        {wishlist.map((item) => (
          <ProductItem key={item._id} product={item.item} />
        ))}
      </ListWrapper>
    </ProductsContainer>
  );
};
