import { AccountIcon, BasketIcon, Container, LikeIcon, Title, Wrap } from './styled';

export const Header = () => {
  return (
    <Container>
      <Title>MARKET</Title>
      <Wrap>
        <LikeIcon width={40} height={35} />
        <BasketIcon width={40} height={39} />
        <AccountIcon width={38} height={40} />
      </Wrap>
    </Container>
  );
};
