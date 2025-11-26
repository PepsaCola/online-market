import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const addToFavorite = createAsyncThunk(
  'favorite/add',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/favorite/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Не вдалося додати до обраного');
    }
  },
);

export const removeFromFavorite = createAsyncThunk(
  'favorite/remove',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/favorite/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Не вдалося видалити з обраного');
    }
  },
);
