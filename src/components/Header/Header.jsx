import {
  AccountIcon,
  BasketIcon,
  Container,
  LikeIcon,
  Title,
  Wrap,
  BasketLink,
  StyledLink,
  LikeLink,
} from './styled';
import { useCart } from '../../pages/CartPage/context/CartContext.jsx';
import { useWishlist } from '../../features/favorite/favorite';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/user');
  };

  return (
    <Container>
      <StyledLink to="/">
        <Title>MARKET</Title>
      </StyledLink>
      <Wrap>
        <LikeLink to="/favorite">
          <LikeIcon width={32} height={32} />
          <p>{wishlist.length}</p>
        </LikeLink>
        <BasketLink to="/cart">
          <BasketIcon width={32} height={32} />
          <p>{cart.length}</p>
        </BasketLink>
        <AccountIcon onClick={handleAccountClick} width={32} height={32} />
      </Wrap>
    </Container>
  );
};
