import {
  AccountIcon,
  BasketIcon,
  Container,
  LikeIcon,
  Title,
  Wrap,
  BasketLink,
  StyledLink,
} from './styled';
import { useCart } from '../../pages/CartPage/context/CartContext.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { cart } = useCart();

  return (
    <Container>
      <StyledLink to="/">
        <Title>MARKET</Title>
      </StyledLink>
      <Wrap>
        <Link to="/favorite">
          <LikeIcon width={32} height={32} />
        </Link>
        <BasketLink to="/cart">
          <BasketIcon width={32} height={32} />
          <p>{cart.length}</p>
        </BasketLink>
        <AccountIcon width={32} height={32} />
      </Wrap>
    </Container>
  );
};
