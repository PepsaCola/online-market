import { Form, Input, InputWrapper, SearchIcon } from './styled';
import { useDispatch } from 'react-redux';
import { fetchProductsByName } from '../../features/products/productsThunks';

export const SearchForm = ({ query, setQuery }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProductsByName({ page: 1, limit: 20, title: query }));
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
