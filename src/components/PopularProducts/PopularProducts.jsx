import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/selectors';
import { fetchProducts } from '../../features/products/productsThunks';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import {
  StyledRectangle10,
  StyledPopularProductsSpan,
  StyledGroup27,
  StyledCardsContainer,
} from './styled';

const limit = 4;
export const PopularProducts = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(getProducts);
  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: limit }));
  }, [dispatch]);
  const popularItems = items.slice(0, limit);

  return (
    <StyledGroup27>
      <StyledRectangle10 />
      <StyledPopularProductsSpan>Popular Products</StyledPopularProductsSpan>

      <StyledCardsContainer>
        {loading && <p>Завантаження популярних товарів...</p>}
        {error && <p>Помилка завантаження популярних товарів: {error}</p>}
        {!loading &&
          !error &&
          popularItems.map((item) => <ItemCard key={item.id || item.name} item={item} />)}
      </StyledCardsContainer>
    </StyledGroup27>
  );
};
