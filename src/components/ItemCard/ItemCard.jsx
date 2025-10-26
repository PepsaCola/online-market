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

export const ItemCard = ({ item, itemLength }) => {
  const image = item.images?.[0] || item.images?.[1] || item.images?.[2] || './img/placeholder.jpg';
  return (
    <Container itemLength={itemLength}>
      <Img alt={item.slug} src={image} />
      <Name>{item.title}</Name>
      <Price>{item.price} $</Price>
      <LikeIconBack>
        <LikeIcon />
      </LikeIconBack>
      <BasketIconBack>
        <BasketIcon className="default-icon" />
        <HoverIcon className="hover-icon" />
      </BasketIconBack>
    </Container>
  );
};
