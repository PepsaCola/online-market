import { useDispatch, useSelector } from 'react-redux';
import { getUserSavedProducts } from '../auth/authSlice';
import { addToFavorite, removeFromFavorite } from '../auth/favoriteThunks';
import { getAuth } from '../auth/authSlice';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getUserSavedProducts);
  const { isLoggedIn } = useSelector(getAuth);

  const addToWishlist = (item) => {
    if (!isLoggedIn) {
      alert('Будь ласка, увійдіть в акаунт, щоб зберігати товари!');
      return;
    }
    dispatch(addToFavorite(item._id));
  };

  const removeFromWishlist = (itemId) => {
    dispatch(removeFromFavorite(itemId));
  };

  const isItemInWishlist = (itemId) => {
    return !!wishlist.find((i) => i._id === itemId);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isItemInWishlist,
  };
};

export const WishlistProvider = ({ children }) => {
  return <>{children}</>;
};
