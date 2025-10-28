import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20 }, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * limit;

      const response = await axiosInstance.get(`/products?offset=${offset}&limit=${limit}`);

      const totalResponse = await axiosInstance.get('/products');
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
