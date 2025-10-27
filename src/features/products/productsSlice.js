import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunks';

const initialState = {
  items: [],
  singleProduct: null,
  loading: false,
  error: null,
  page: 1,
  totalCount: 0,
  limit: 20,
  categories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { page, query } = action.meta.arg;
        if (query === undefined && page > 1) {
          state.items = [...state.items, ...action.payload.data];
        } else {
          state.items = action.payload.data;
        }
        state.page = action.payload.page;
        state.totalCount = action.payload.totalCount;
        state.categories = action.payload.categories;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
