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
import { useParams, Outlet } from 'react-router-dom';
import ProductInfoContainer from '../../components/ProductPage/ProductInfo/ProductInfoContainer';
import ProductImages from '../../components/ProductPage/ProductImages';
import { getOptionsForProduct } from './data/productOptions';

const LOCAL_STORAGE_KEY = 'currentViewedProduct';

export const ProductPage = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [dynamicOptions, setDynamicOptions] = useState([]);

  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    let productFound = null;

    if (items.length > 0) {
      productFound = items.find((item) => item._id === id || item.id === id);
    }

    if (!productFound) {
      try {
        const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cachedData) {
          const cachedProduct = JSON.parse(cachedData);
          if (cachedProduct._id === id || cachedProduct.id === id) {
            productFound = cachedProduct;
          }
        }
      } catch (err) {
        console.warn('Error reading product from localStorage', err);
      }
    }

    if (productFound) {
      setSingleProduct(productFound);

      const options = getOptionsForProduct(productFound);
      setDynamicOptions(options);

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productFound));
      } catch (err) {
        console.warn('Error saving product in localStorage', err);
      }
    } else {
      setSingleProduct(null);
    }
  }, [id, items]);

  useEffect(() => {
    if (singleProduct?.images && singleProduct.images.length > 0) {
      setMainImage(singleProduct.images[0]);
    }
  }, [singleProduct]);

  const handleMainImgClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  if (!singleProduct) {
    return (
      <Container>
        <p>Loading product...</p>
        <p>
          (Oops.. Return to <a href="/">Main</a> and try again.)
        </p>
      </Container>
    );
  }

  return (
    <Container>
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
          <ProductInfoContainer singleProduct={singleProduct} options={dynamicOptions} />
        </ProductLayout>

        <ProductsNavWrap>
          <ProductsNav>
            {singleProduct.description && (
              <ProductsNavLink to="description">Description</ProductsNavLink>
            )}
            <ProductsNavLink to="review">
              Reviews ({singleProduct.reviews ? singleProduct.reviews.length : 0})
            </ProductsNavLink>
          </ProductsNav>
          <Outlet />
        </ProductsNavWrap>
      </>
    </Container>
  );
};
