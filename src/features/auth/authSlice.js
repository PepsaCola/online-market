import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './authThunks';
import { addBucketThunk, deleteBucketThunk } from './bucketThunks';
import { addToFavorite, removeFromFavorite } from './favoriteThunks';

const initialState = {
  user: {
    username: null,
    email: null,
    bucketProducts: [],
    savedProducts: [],
    reviews: [],
    _id: null,
  },
  accessToken: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = initialState.user;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.user = initialState.user;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(addBucketThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBucketThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user.bucketProducts = action.payload.bucketProducts;
      })
      .addCase(addBucketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBucketThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBucketThunk.fulfilled, (state, action) => {
        // ОНОВЛЕННЯ НАЗВИ
        state.loading = false;
        state.user.bucketProducts = action.payload.bucketProducts;
      })
      .addCase(deleteBucketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        if (!state.user.savedProducts) state.user.savedProducts = [];
        const newProduct = action.payload.itemId;
        state.user.savedProducts.push(newProduct);
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        console.error('ERROR:', action.payload);
        state.error = action.payload;
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        if (!state.user.savedProducts) return;

        const removedItem = action.payload.itemId;
        const removedId = removedItem?._id || removedItem;

        state.user.savedProducts = state.user.savedProducts.filter(
          (item) => item._id !== removedId,
        );
      });
  },
});

export const { clearError } = authSlice.actions;
export const getAuth = (state) => state.auth;
export const getUserSavedProducts = (state) => state.auth.user?.savedProducts || [];
export default authSlice.reducer;
