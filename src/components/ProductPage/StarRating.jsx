import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #ffc107;
  font-size: 32px;
  margin-top: 25px;

  span {
    color: #444;
    font-size: 20px;
    font-weight: 300;
    margin-left: 16px;
  }
`;

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) {
      return <FaStar key={i} />;
    } else if (rating >= i) {
      return <FaStarHalfAlt key={i} />;
    }
    return <FaRegStar key={i} />;
  });

  return (
    <StarContainer>
      {stars} <span>13 reviews</span>
    </StarContainer>
  );
};

export default StarRating;
