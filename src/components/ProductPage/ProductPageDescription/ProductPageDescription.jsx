import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductsNavResultBox, Text } from './styled';

export const ProductPageDescription = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.products);
  const singleProduct = items.find((item) => item.id === id || item._id === id);
  return (
    <ProductsNavResultBox>
      <Text>{singleProduct.description}</Text>
    </ProductsNavResultBox>
  );
};
