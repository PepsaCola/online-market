import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20, title, category }, { rejectWithValue }) => {
    try {
      const params = {
        page: page,
        limit: limit,
      };
      if (title) {
        params.title = title;
      }
      if (category) {
        params.category = category;
      }

      const response = await axiosInstance.get(`/products`, { params });
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
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Помилка завантаження продуктів');
    }
  },
);
