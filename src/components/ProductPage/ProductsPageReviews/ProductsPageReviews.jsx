import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Review } from './Review/Review';
import { ProductsNavResultBox } from '../ProductPageDescription/styled';

export const ProductsPageReviews = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.products);
  const singleProduct = items.find((item) => item.id === id || item._id === id);
  return (
    <ProductsNavResultBox>
      {singleProduct.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ProductsNavResultBox>
  );
};
