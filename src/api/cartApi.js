import axiosInstance from './axiosInstance'; // Твій налаштований axios з токеном

export const addToBucket = async (id) => {
  return await axiosInstance.post(`/bucket/${id}`);
};

export const removeFromBucket = async (id) => {
  return await axiosInstance.delete(`/bucket/${id}`);
};

export const buyAllProducts = async () => {
  return await axiosInstance.put('/buy/all');
};

export const getUserData = async () => {
  return await axiosInstance.get('/');
};
