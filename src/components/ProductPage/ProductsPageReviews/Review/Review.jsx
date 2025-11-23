import { Avatar, AvatarWrap, Container, Name, StarsContainer, Text } from './styled';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export const Review = ({ key, review }) => {
  const rating = review.rate;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) {
      return <FaStar key={i} />;
    } else if (rating >= i) {
      return <FaStarHalfAlt key={i} />;
    }
    return <FaRegStar key={i} />;
  });
  return (
    <Container key={key}>
      <AvatarWrap>
        <Avatar />
        <Name>{review.user}</Name>
      </AvatarWrap>
      <StarsContainer>{stars}</StarsContainer>
      <Text>{review.text}</Text>
    </Container>
  );
};
