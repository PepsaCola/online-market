import { AccountIcon, BasketIcon, Container, LikeIcon, Title, Wrap } from './styled';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Title>MARKET</Title>
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
