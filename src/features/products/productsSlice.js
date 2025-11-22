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
        if (Array.isArray(action.payload.data)) {
          if (action.meta.arg.page === 1) {
            state.items = action.payload.data;
          } else {
            state.items = [...state.items, ...action.payload.data];
          }
          state.totalCount = action.payload.totalCount;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
