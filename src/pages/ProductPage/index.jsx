import { Container, ProductLayout, ProductImage } from './styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { fetchProductsById } from '../../features/products/productsThunks';
import ProductInfoContainer from '../../components/ProductPage/ProductInfo/ProductInfoContainer';
import ProductImages from '../../components/ProductPage/ProductImages';

const options = [
  {
    type: 'Color',
    variants: ['pink', 'green', 'blue'],
  },
  {
    type: 'Size',
    variants: ['M', 'L', 'XL'],
  },
];

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector((state) => state.products);

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (singleProduct?.images && singleProduct.images.length > 0) {
      setMainImage(singleProduct.images[0]);
    }
  }, [singleProduct]);

  useEffect(() => {
    if (id) {
      // const numericId = parseInt(id, 10);
      // dispatch(fetchProductsById(numericId));
    }
  }, [id, dispatch]);

  // console.log('singleProduct:', singleProduct);

  const handleMainImgClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  return (
    <Container>
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error.message}</p>}
      {!loading && !error && (
        <>
          <ProductLayout>
            <div>
              <ProductImage src={mainImage} alt={singleProduct?.title} />
              <ProductImages
                onMainImgClick={handleMainImgClick}
                images={singleProduct?.images}
                activeImage={mainImage}
              />
            </div>
            <ProductInfoContainer singleProduct={singleProduct} options={options} />
          </ProductLayout>
          {/*<ProductCharacteristics></ProductCharacteristics>*/}
        </>
      )}
    </Container>
  );
};
