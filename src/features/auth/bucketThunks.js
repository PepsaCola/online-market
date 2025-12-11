import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const addBucketThunk = createAsyncThunk(
  'user/addBucket',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`bucket/${data.id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const deleteBucketThunk = createAsyncThunk(
  'user/deleteBucket',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`bucket/${data.id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const buyAllThunk = createAsyncThunk('bucket/buyAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put('/buy/all');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Purchase failed');
  }
});
