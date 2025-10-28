import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((i) => i._id === item._id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };
  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => {
      return prevWishlist.filter((i) => i._id !== itemId);
    });
  };
  const isItemInWishlist = (itemId) => {
    return !!wishlist.find((i) => i._id === itemId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isItemInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
