import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://online-market-api-eight.vercel.app/api/',
  // baseURL: 'http://localhost:3001/api/',
});

export default axiosInstance;
