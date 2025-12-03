import React from 'react';
import { useWishlist } from '../../../features/products/favorite';
import { ProductItem } from '../../ProductItem/ProductItem';
import {
  ProductsContainer,
  ProductTable,
  TableHead,
  TableBody,
  HeaderRow,
  HeaderText,
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

  return (
    <ProductsContainer>
      <ProductTable>
        <TableHead>
          <HeaderRow>
            <HeaderText>Product</HeaderText>
            <HeaderText>Price</HeaderText>
            <HeaderText></HeaderText>
            <HeaderText></HeaderText>
          </HeaderRow>
        </TableHead>
        <TableBody>
          {wishlist.map((item) => (
            <ProductItem key={item._id} product={item.item} />
          ))}
        </TableBody>
      </ProductTable>
    </ProductsContainer>
  );
};
