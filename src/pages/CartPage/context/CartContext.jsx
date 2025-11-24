import { createContext, useContext, useState, useEffect } from 'react';
import { addToBucket, removeFromBucket, getUserData } from '../../../api/cartApi';
import { useSelector } from 'react-redux';
import { getToken } from '../../../features/auth/selectors';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const token = useSelector(getToken);

  const saveLocalData = (currentCart) => {
    const metaData = {};
    currentCart.forEach((item) => {
      metaData[item._id] = {
        qty: item.qty,
        selectedOptions: item.selectedOptions,
      };
    });
    localStorage.setItem('cart_local_data', JSON.stringify(metaData));
  };

  useEffect(() => {
    const loadCart = async () => {
      if (token) {
        try {
          const response = await getUserData();
          const localData = JSON.parse(localStorage.getItem('cart_local_data') || '{}');

          const serverCart = response.data.bucketProducts.map((item) => {
            const localItem = localData[item._id] || {};
            return {
              ...item,
              qty: localItem.qty || 1,
              selectedOptions: localItem.selectedOptions || {},
            };
          });

          setCart(serverCart);
          saveLocalData(serverCart);
        } catch (error) {
          console.error(error);
        }
      } else {
        setCart([]);
      }
    };
    loadCart();
  }, [token]);

  const addToCart = async (product, amount = 1, options = {}) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      const newCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, qty: item.qty + amount, selectedOptions: options }
          : item,
      );
      setCart(newCart);
      saveLocalData(newCart);
      toast.success(`Added locally`);
    } else {
      try {
        await addToBucket(product._id);
        const newItem = { ...product, qty: amount, selectedOptions: options };
        const newCart = [...cart, newItem];
        setCart(newCart);
        saveLocalData(newCart);
        toast.success('Product added to bucket!');
      } catch (error) {
        if (error.response?.status === 400) {
          const newItem = { ...product, qty: amount, selectedOptions: options };
          const newCart = [...cart, newItem];
          setCart(newCart);
          saveLocalData(newCart);
        } else {
          toast.error('Failed to add');
        }
      }
    }
  };

  const removeFromCart = async (id) => {
    try {
      await removeFromBucket(id);
      const newCart = cart.filter((item) => item._id !== id);
      setCart(newCart);
      saveLocalData(newCart);
      toast.info('Removed from bucket');
    } catch (error) {
      console.error(error);
      toast.error('Failed to remove');
    }
  };

  const increaseQty = (id) => {
    const newCart = cart.map((item) => (item._id === id ? { ...item, qty: item.qty + 1 } : item));
    setCart(newCart);
    saveLocalData(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = cart
      .map((item) => (item._id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);

    setCart(newCart);
    saveLocalData(newCart);
  };

  const clearLocalCart = () => {
    setCart([]);
    localStorage.removeItem('cart_local_data');
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearLocalCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
