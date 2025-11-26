import React from 'react';
import {
  BasketIcon,
  BasketIconBack,
  Container,
  HoverIcon,
  Img,
  LikeIcon,
  LikeIconBack,
  Name,
  Price,
} from './styled';
import { useWishlist } from '../../features/favorite/favorite';
import { addBucketThunk } from '../../features/auth/bucketThunks';
import { useDispatch } from 'react-redux';

export const ItemCard = ({ item }) => {
  const image = item.images?.[0] || item.images?.[1] || './img/placeholder.jpg';
  const { addToWishlist, removeFromWishlist, isItemInWishlist } = useWishlist();
  const isLiked = isItemInWishlist(item._id);
  const dispatch = useDispatch();
  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(item._id);
    } else {
      addToWishlist(item);
    }
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(item._id);
    dispatch(addBucketThunk({ id: item._id }));
  };

  return (
    <Container to={`/products/${item._id}`}>
      <Img alt={item.slug} src={image} />
      <Name>{item.title}</Name>
      <Price>{item.price} $</Price>

      <LikeIconBack onClick={handleLikeClick} $isLiked={isLiked}>
        <LikeIcon $isLiked={isLiked} />
      </LikeIconBack>

      <BasketIconBack onClick={handleCartClick}>
        <BasketIcon className="default-icon" />
        <HoverIcon className="hover-icon" />
      </BasketIconBack>
    </Container>
  );
};
