import React from 'react';
import { useWishlist } from '../../../features/products/favorite';
import { ProductItem } from '../../ProductItem/ProductItem';
import {
  ProductsContainer,
  Header,
  HeaderText,
  ProductList,
  EmptyWrapper,
  EmptyText,
} from './styled';

export const Products = () => {
  const { wishlist } = useWishlist();
  if (!wishlist || wishlist.length === 0) {
    return (
      <EmptyWrapper>
        <EmptyText>Список обраного порожній.</EmptyText>
      </EmptyWrapper>
    );
  }
  console.log(wishlist);
  return (
    <ProductsContainer>
      <Header>
        <HeaderText className="product-header">Product</HeaderText>
        <HeaderText className="price-header">Total Price</HeaderText>
      </Header>
      <ProductList>
        {wishlist.map((item) => (
          <ProductItem key={item._id} product={item.item} />
        ))}
      </ProductList>
    </ProductsContainer>
  );
};
