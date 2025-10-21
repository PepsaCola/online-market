import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20, categorySlug = '', title = '' }, { rejectWithValue }) => {
    try {
      console.log(page);

      const response = await axiosInstance.get(
        `/products?page=${page}&limit=${limit}&categorySlug=${categorySlug}&title=${title}`,
      );

      const categories = await axiosInstance.get(`/categories`);

      return {
        data: response.data.data,
        page,
        totalCount: response.data.totalCount,
        categories: categories.data,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Помилка завантаження продуктів');
    }
  },
);

export const fetchProductsById = createAsyncThunk(
  'products/fetchById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Помилка завантаження продукту');
    }
  },
);
