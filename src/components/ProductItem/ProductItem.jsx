import React from 'react';
import {
  ItemRow,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  Price,
  ActionButton,
  RemoveIcon,
} from './styled';
import { useWishlist } from '../../features/products/favorite';
import { useCart } from '../../pages/CartPage/context/CartContext';

export const ProductItem = ({ product }) => {
  const imageUrl = product.images?.[0] || 'https://via.placeholder.com/80';
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemoveClick = () => {
    removeFromWishlist(product._id);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ItemRow>
      <ProductDetails>
        <ProductImage src={imageUrl} alt={product.title} />
        <ProductInfo>
          <ProductName>{product.title}</ProductName>
        </ProductInfo>
      </ProductDetails>
      <Price>${product.price.toFixed(2)}</Price>
      <ActionButton onClick={handleAddToCart}>Add To Cart</ActionButton>

      <RemoveIcon width={18} height={20} onClick={handleRemoveClick} />
    </ItemRow>
  );
};
