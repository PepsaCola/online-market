import React, { useState } from 'react';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Container } from '../Shop/styled';
import { PopularProducts } from '../../components/PopularProducts/PopularProducts';
import { CategoryTitle } from '../../components/CategoryTitle/styled';
import { StyledSpan } from '../../components/StyledSpan/StyledSpan';

export const Main = () => {
  const [query, setQuery] = useState('');
  return (
    <>
      <Container>
        <MainBlock />
        <SearchForm query={query} setQuery={setQuery} />
        <PopularProducts />
        <CategoryTitle>Category</CategoryTitle>
        <StyledSpan />
      </Container>
    </>
  );
};
