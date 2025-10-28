import { Container, Filters, FilterWrap, Content } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/selectors';
import { fetchProducts } from '../../features/products/productsThunks';
import { useEffect, useState } from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useDebounce } from '../../hooks/useDebounce';
import { CustomDropdown } from '../../components/CustomDropdown/CustomDropdown';

const sortOptions = [
  { value: '', label: 'Sort by' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

export const Shop = () => {
  const dispatch = useDispatch();
  const { items, loading, error, totalCount, limit, categories } = useSelector(getProducts);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState(''); // State for sorting
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(query, 500);

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...categories.map((cat) => ({ value: cat.slug, label: cat.name })),
  ];

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  const handleSortSelect = (sortValue) => {
    setSelectedSort(sortValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    dispatch(
      fetchProducts({
        page: currentPage,
        limit,
        categorySlug: selectedCategory,
        title: debouncedQuery,
        sortBy: selectedSort,
      }),
    );
  }, [dispatch, currentPage, limit, debouncedQuery, selectedCategory, selectedSort]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Container>
      <SearchForm query={query} setQuery={setQuery} />
      <Filters>
        <FilterWrap>
          <CustomDropdown
            options={categoryOptions}
            selectedValue={selectedCategory}
            onSelect={handleCategorySelect}
            placeholder="All Categories"
          />
        </FilterWrap>

        <CustomDropdown
          options={sortOptions}
          selectedValue={selectedSort}
          onSelect={handleSortSelect}
          placeholder="Sort by"
        />
      </Filters>

      <Content>
        {loading ? (
          <p>Завантаження...</p>
        ) : error ? (
          <p>Помилка: {error}</p>
        ) : items.length === 0 ? (
          <p>Нічого не знайдено..</p>
        ) : (
          items.length !== 0 &&
          items.map((item, index) => <ItemCard key={index} item={item} itemLength={items.length} />)
        )}
      </Content>

      {items.length !== 0 && (
        <Pagination page={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </Container>
  );
};
