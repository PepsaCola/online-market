import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/selectors';
import { fetchProducts } from '../../features/products/productsThunks';
import { MainBlock } from '../../components/MainPage/MainBlock/MainBlock';
import { MainSearchForm } from '../../components/MainPage/MainSearchForm/MainSearchForm';
import { Container, ProductGrid } from './styled';
import { PopularProducts } from '../../components/MainPage/PopularProducts/PopularProducts';
import { CategoryTitle } from '../../components/MainPage/CategoryTitle/styled';
import { StyledSpan } from '../../components/MainPage/StyledSpan/StyledSpan';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { LoadMoreButton } from '../../components/MainPage/LoadMoreButton/LoadMoreButton';

const limit = 8;

export const Main = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [activeCategorySlug, setActiveCategorySlug] = useState(null);
  const dispatch = useDispatch();
  const { items, loading, error, categories } = useSelector(getProducts);

  useEffect(() => {
    setPage(1);
  }, [query, activeCategorySlug]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        page: page,
        limit: limit,
        title: query,
        category: activeCategorySlug,
      }),
    );
  }, [dispatch, page, query, activeCategorySlug]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Container>
        <MainBlock />
        <MainSearchForm query={query} setQuery={setQuery} />
        <PopularProducts />
        <CategoryTitle>Category</CategoryTitle>

        <StyledSpan
          categories={categories || []}
          activeCategorySlug={activeCategorySlug}
          onCategoryChange={setActiveCategorySlug}
        />

        <ProductGrid>
          {loading && items.length === 0 && <p>Завантаження...</p>}
          {error && <p>Помилка: {error}</p>}
          {!error &&
            Array.isArray(items) &&
            items.map((item, index) => <ItemCard key={item._id || index} item={item} />)}
          {loading && items.length > 0 && <p>Завантаження...</p>}
        </ProductGrid>
        <LoadMoreButton onClick={handleLoadMore} />
      </Container>
    </>
  );
};
