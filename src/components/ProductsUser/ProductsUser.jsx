import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsThunks';
import { getProducts } from '../../features/products/selectors';
import { ProductsContainer, Header, HeaderText, ProductList } from './styled';
import { ProductItemUser } from '../ProductItemUser/ProductItemUser';

export const ProductsUser = () => {
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
        <HeaderText className="product-header">Quantity</HeaderText>
        <HeaderText className="price-header">Total Price</HeaderText>
      </Header>
      <ProductList>
        {items.map((item) => (
          <ProductItemUser key={item._id} product={item} />
        ))}
      </ProductList>
    </ProductsContainer>
  );
};
