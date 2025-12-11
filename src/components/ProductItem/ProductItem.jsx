import React from 'react';
import { useDispatch } from 'react-redux';
import { addBucketThunk } from '../../features/auth/bucketThunks';
import { useWishlist } from '../../features/products/favorite';
import {
  Card,
  InfoGroup,
  ActionsGroup,
  ImageWrapper,
  ProductImage,
  ProductTitle,
  Price,
  AddToCartBtn,
  RemoveBtn,
  RemoveIconStyled,
} from './styled';

export const ProductItem = ({ product }) => {
  const imageUrl = product.images?.[0] || 'https://via.placeholder.com/80';
  const { removeFromWishlist } = useWishlist();
  const dispatch = useDispatch();

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeFromWishlist(product._id);
  };

  const handleAddToCart = () => {
    dispatch(addBucketThunk({ id: product._id }));
  };

  return (
    <Card>
      <InfoGroup>
        <ImageWrapper>
          <ProductImage src={imageUrl} alt={product.title} />
        </ImageWrapper>
        <ProductTitle>{product.title}</ProductTitle>
      </InfoGroup>

      <ActionsGroup>
        <Price>${product.price.toFixed(2)}</Price>

        <AddToCartBtn onClick={handleAddToCart}>Add To Cart</AddToCartBtn>

        <RemoveBtn onClick={handleRemoveClick} aria-label="Remove item">
          <RemoveIconStyled />
        </RemoveBtn>
      </ActionsGroup>
    </Card>
  );
};
