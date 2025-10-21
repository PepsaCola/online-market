import { ArrowIcon, Container, Filter, Filters, FilterWrap, Sorted, Content } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../../features/products/selectors';
import { fetchProducts } from '../../features/products/productsThunks';
import { useEffect, useState } from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export const Shop = () => {
  const dispatch = useDispatch();
  const { items, loading, error, page, totalCount, limit } = useSelector(getProducts);
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit, query: urlQuery }));
  }, [dispatch, limit, urlQuery]);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchProducts({ page: newPage, limit, query: urlQuery }));
    }
  };

  return (
    <Container>
      <SearchForm query={query} setQuery={setQuery} />
      <Filters>
        <FilterWrap>
          <Filter>
            All Categories <ArrowIcon />
          </Filter>
          <Filter>
            Price <ArrowIcon />
          </Filter>
          <Filter>
            Review <ArrowIcon />
          </Filter>
        </FilterWrap>
        <Sorted>
          Sort by <ArrowIcon />
        </Sorted>
      </Filters>

      <Content>
        {loading && <p>Завантаження...</p>}
        {error && <p>Помилка: {error}</p>}
        {!loading && !error && items.map((item, index) => <ItemCard key={index} item={item} />)}
      </Content>

      <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};
