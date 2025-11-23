import React, { useEffect, useState } from 'react';
import { ItemCard } from '../../ItemCard/ItemCard';
import { ShowcaseBackground, SectionTitle, ShowcaseSection, CardsGrid } from './styled';
import axiosInstance from '../../../api/axiosInstance';

export const PopularProducts = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/products', {
          params: {
            page: 1,
            limit: 4,
          },
        });
        setPopularItems(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopular();
  }, []);

  return (
    <ShowcaseSection>
      <ShowcaseBackground />
      <SectionTitle>Popular Products</SectionTitle>

      <CardsGrid>
        {loading && <p>Завантаження популярних товарів...</p>}
        {error && <p>Помилка: {error}</p>}

        {!loading &&
          !error &&
          popularItems.map((item) => <ItemCard key={item._id || item.id} item={item} />)}
      </CardsGrid>
    </ShowcaseSection>
  );
};
