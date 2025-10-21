import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page = 1, limit = 20 }, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * limit;

      const response = await axiosInstance.get(`/products?offset=${offset}&limit=${limit}`);

      const totalResponse = await axiosInstance.get('/products');

      return {
        data: response.data,
        page,
        totalCount: totalResponse.data.length,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Помилка завантаження продуктів');
    }
  },
);

export const fetchProductsByName = createAsyncThunk(
  'products/fetchProductsByName',
  async ({ page = 1, limit = 20, title }, { rejectWithValue }) => {
    try {
      const offset = (page - 1) * limit;

      const response = await axiosInstance.get(
        `/products?offset=${offset}&limit=${limit}&title=${title}`,
      );

      const totalResponse = await axiosInstance.get(`/products?title=${title}`);

      return {
        data: response.data,
        page,
        totalCount: totalResponse.data.length,
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
