import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunks';

const initialState = {
  items: [],
  categories: [],
  singleProduct: null,
  loading: false,
  error: null,
  page: 1,
  totalCount: 0,
  limit: 20,
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

        if (action.meta.arg.page === 1) {
          state.items = action.payload.data;
        } else {
          state.items = [...state.items, ...action.payload.data];
        }
        state.categories = action.payload.categories;
        state.totalCount = action.payload.totalCount;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
