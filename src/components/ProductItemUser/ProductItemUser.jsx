import React from 'react';
import { ItemRow, ProductDetails, ProductImage, ProductInfo, ProductName, Price } from './styled';

export const ProductItemUser = ({ product }) => {
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0]
      : 'https://via.placeholder.com/80';

  return (
    <ItemRow>
      <ProductDetails>
        <ProductImage src={imageUrl} />
        <ProductInfo>
          <ProductName>{product.title}</ProductName>
        </ProductInfo>
      </ProductDetails>
      <Price>${product.price.toFixed(2)}</Price>
    </ItemRow>
  );
};
