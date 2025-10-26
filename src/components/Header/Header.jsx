import {
  AccountIcon,
  BasketIcon,
  Container,
  LikeIcon,
  Title,
  Wrap,
  BasketLink,
  TitleLink,
} from './styled';
import { useCart } from '../../pages/CartPage/context/CartContext.jsx';

export const Header = () => {
  const { cart } = useCart();

  return (
    <Container>
      <TitleLink to="/">
        <Title>MARKET</Title>
      </TitleLink>
      <Wrap>
        <LikeIcon width={32} height={32} />
        <BasketLink to="/cart">
          <BasketIcon width={32} height={32} />
          <p>{cart.length}</p>
        </BasketLink>
        <AccountIcon width={32} height={32} />
      </Wrap>
    </Container>
  );
};
