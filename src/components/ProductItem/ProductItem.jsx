import React from 'react';
import {
  ItemRow,
  TableCell, // Новий компонент (td)
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  Price,
  ActionButton,
  RemoveIcon,
  MobileActionButton,
} from './styled';
import { useDispatch } from 'react-redux';
import { addBucketThunk } from '../../features/auth/bucketThunks';
import { useWishlist } from '../../features/products/favorite';

export const ProductItem = ({ product }) => {
  const imageUrl = product.images?.[0] || 'https://via.placeholder.com/80';
  const { removeFromWishlist } = useWishlist();
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    removeFromWishlist(product._id);
  };

  const handleAddToCart = () => {
    dispatch(addBucketThunk({ id: product._id }));
  };

  return (
    <ItemRow>
      <TableCell>
        <ProductDetails>
          <ProductImage src={imageUrl} alt={product.title} />
          <ProductInfo>
            <ProductName>{product.title}</ProductName>
          </ProductInfo>
        </ProductDetails>
      </TableCell>

      <TableCell>
        <Price>${product.price.toFixed(2)}</Price>
      </TableCell>

      <TableCell>
        <ActionButton onClick={handleAddToCart}>Add To Cart</ActionButton>
      </TableCell>

      <TableCell>
        <RemoveIcon width={18} height={20} onClick={handleRemoveClick} />
        <MobileActionButton onClick={handleAddToCart}>Add To Cart</MobileActionButton>
      </TableCell>
    </ItemRow>
  );
};
