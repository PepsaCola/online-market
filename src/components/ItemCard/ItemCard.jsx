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

export const ItemCard = ({ item }) => {
  const image = item.images?.[0] || item.images?.[1] || item.images?.[2] || './img/placeholder.jpg';
  const { addToWishlist, removeFromWishlist, isItemInWishlist } = useWishlist();
  const isLiked = isItemInWishlist(item.id);
  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <Container to={`/products/${item.id}`}>
      <Img alt={item.slug} src={image} />
      <Name>{item.title}</Name>
      <Price>{item.price} $</Price>
      <LikeIconBack onClick={handleLikeClick} $isLiked={isLiked}>
        <LikeIcon $isLiked={isLiked} />
      </LikeIconBack>

      <BasketIconBack>
        <BasketIcon className="default-icon" />
        <HoverIcon className="hover-icon" />
      </BasketIconBack>
    </Container>
  );
};
