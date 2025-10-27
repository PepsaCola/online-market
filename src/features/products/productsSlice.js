import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByName, fetchProductsById } from './productsThunks';

const initialState = {
  items: [],
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
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByName.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchProductsByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleProduct = null;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
