import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20, title }, { rejectWithValue }) => {
    try {
      const params = {
        page: page,
        limit: limit,
      };
      const response = await axiosInstance.get(`/products`, { params });
      const totalParams = {};
      if (title) {
        totalParams.title = title;
      }

      const totalResponse = await axiosInstance.get('/products', { params: totalParams });
      const categories = await axiosInstance.get(`/categories`);

      return {
        data: response.data.data,
        page,
        totalCount: totalResponse.data.length,
        categories: categories.data,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Помилка завантаження продуктів');
    }
  },
);
