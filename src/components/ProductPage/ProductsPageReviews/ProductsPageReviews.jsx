import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Review } from './Review/Review';
import { ProductsNavResultBox } from '../ProductPageDescription/styled';

export const ProductsPageReviews = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.products);

  const singleProduct = items.find((item) => item._id === id || item.id === id);

  if (!singleProduct || !singleProduct.reviews || singleProduct.reviews.length === 0) {
    return (
      <ProductsNavResultBox>
        <p style={{ padding: '20px', color: '#888' }}>No reviews yet.</p>
      </ProductsNavResultBox>
    );
  }

  return (
    <ProductsNavResultBox>
      {singleProduct.reviews.map((review, index) => (
        <Review key={review._id || index} review={review} />
      ))}
    </ProductsNavResultBox>
  );
};
