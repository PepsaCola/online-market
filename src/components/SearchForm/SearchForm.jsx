import { Form, Input, InputWrapper, SearchIcon } from './styled';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/productsThunks';

export const SearchForm = ({ query, setQuery, categorySlug }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProducts({ page: 1, limit: 20, title: query, categorySlug }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <SearchIcon />
        <Input
          placeholder="Search products here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputWrapper>
    </Form>
  );
};
