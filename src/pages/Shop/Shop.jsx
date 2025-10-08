import {
  ArrowIcon,
  Container,
  Filter,
  Filters,
  FilterWrap,
  Form,
  Input,
  SearchIcon,
  Sorted,
  InputWrapper,
} from './styled';

export const Shop = () => {
  return (
    <Container>
      <Form>
        <InputWrapper>
          <SearchIcon />
          <Input placeholder="Search..." />
        </InputWrapper>
      </Form>

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
    </Container>
  );
};
