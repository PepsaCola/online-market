import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/selectors';
import { ItemCard } from '../../ItemCard/ItemCard';
import { ShowcaseBackground, SectionTitle, ShowcaseSection, CardsGrid } from './styled';

export const PopularProducts = ({ items }) => {
  const { loading, error } = useSelector(getProducts);

  return (
    <ShowcaseSection>
      <ShowcaseBackground />
      <SectionTitle>Popular Products</SectionTitle>

      <CardsGrid>
        {loading && <p>Завантаження популярних товарів...</p>}
        {error && <p>Помилка завантаження популярних товарів: {error}</p>}
        {!loading &&
          !error &&
          items.map((item) => <ItemCard key={item.id || item.name} item={item} />)}
      </CardsGrid>
    </ShowcaseSection>
  );
};
