import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/register', credentials);
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Помилка реєстрації');
    }
  },
);

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/login', credentials);
    const { accessToken, user } = response.data;
    localStorage.setItem('accessToken', accessToken);
    setAuthHeader(accessToken);
    return { accessToken, user };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Помилка входу');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    localStorage.removeItem('accessToken');
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue('Помилка виходу');
  }
});
export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return rejectWithValue('Токен відсутній, авторизація неможлива');
  }
  try {
    setAuthHeader(token);
    const response = await axiosInstance.get('/api');
    return { user: response.data, accessToken: token };
  } catch (error) {
    localStorage.removeItem('accessToken');
    clearAuthHeader();
    return rejectWithValue(error.response?.data?.message || 'Сесія застаріла');
  }
});
