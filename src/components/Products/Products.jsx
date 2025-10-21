import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsThunks';
import { getProducts } from '../../features/products/selectors';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductsContainer, Header, HeaderText, ProductList } from './styled';

export const Products = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 5 }));
  }, [dispatch]);

  if (loading && items.length === 0) {
    return <p>Завантаження...</p>;
  }
  if (error) {
    return <p>Помилка: {error}</p>;
  }
  if (!items || items.length === 0) {
    return <p>Список порожній.</p>;
  }

  return (
    <ProductsContainer>
      <Header>
        <HeaderText className="product-header">Product</HeaderText>
        <HeaderText className="price-header">Total Price</HeaderText>
      </Header>
      <ProductList>
        {items.map((item) => (
          <ProductItem key={item._id} product={item} />
        ))}
      </ProductList>
    </ProductsContainer>
  );
};
