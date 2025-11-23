import {
  Container,
  ProductLayout,
  ProductImage,
  ProductsNav,
  ProductsNavLink,
  ProductsNavWrap,
} from './styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
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
  const { items, loading, error } = useSelector((state) => state.products);

  const [mainImage, setMainImage] = useState(null);
  const singleProduct = items.find((item) => item.id === id || item._id === id);

  useEffect(() => {
    if (singleProduct?.images && singleProduct.images.length > 0) {
      setMainImage(singleProduct.images[0]);
    }
  }, [singleProduct]);

  const handleMainImgClick = (imgUrl) => {
    setMainImage(imgUrl);
  };
  console.log(singleProduct);
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

          <ProductsNavWrap>
            <ProductsNav>
              {singleProduct.description && (
                <ProductsNavLink to="description">Description</ProductsNavLink>
              )}
              {singleProduct?.reviews.length !== 0 && (
                <ProductsNavLink to="review">Review</ProductsNavLink>
              )}
            </ProductsNav>
            <Outlet />
          </ProductsNavWrap>
        </>
      )}
    </Container>
  );
};
