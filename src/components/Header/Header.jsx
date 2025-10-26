import { AccountIcon, BasketIcon, Container, LikeIcon, Title, Wrap, StyledLink } from './styled';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Title>MARKET</Title>
      </StyledLink>
      <Wrap>
        <Link to="/favorite">
          <LikeIcon width={40} height={35} />
        </Link>
        <BasketIcon width={40} height={39} />
        <AccountIcon width={38} height={40} />
      </Wrap>
    </Container>
  );
};
