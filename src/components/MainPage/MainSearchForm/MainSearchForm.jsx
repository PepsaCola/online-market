import { Form, Input, InputWrapper, SearchIcon } from './styled';
import { useNavigate } from 'react-router-dom';

export const MainSearchForm = ({ query, setQuery }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${query}`);
    } else {
      navigate('/shop');
    }
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
