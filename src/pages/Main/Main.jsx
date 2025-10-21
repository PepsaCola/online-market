import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/selectors';
import { fetchProducts } from '../../features/products/productsThunks';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Container, ProductGrid } from './styled';
import { PopularProducts } from '../../components/PopularProducts/PopularProducts';
import { CategoryTitle } from '../../components/CategoryTitle/styled';
import { StyledSpan } from '../../components/StyledSpan/StyledSpan';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';

const limit = 8;

export const Main = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(getProducts);
  useEffect(() => {
    dispatch(fetchProducts({ page: page, limit: limit }));
  }, [dispatch, page]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const popularItems = items.slice(0, 4);

  return (
    <>
      <Container>
        <MainBlock />
        <SearchForm query={query} setQuery={setQuery} />
        <PopularProducts items={popularItems} loading={loading} error={error} />
        <CategoryTitle>Category</CategoryTitle>
        <StyledSpan />
        <ProductGrid>
          {loading && items.length === 0 && <p>Завантаження...</p>}
          {error && <p>Помилка: {error}</p>}
          {!error &&
            items.map((item, index) => (
              <ItemCard key={item.id || index} item={{ ...item, isSimpleAdd: index % 3 !== 0 }} />
            ))}
          {loading && items.length > 0 && <p>Завантаження...</p>}
        </ProductGrid>
        <LoadMoreButton onClick={handleLoadMore} />
      </Container>
    </>
  );
};
