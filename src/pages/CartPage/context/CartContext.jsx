import { createContext, useContext, useState, useEffect } from 'react';
import { addToBucket, removeFromBucket, getUserData } from '../../../api/cartApi';
import { useSelector } from 'react-redux';
import { getToken } from '../../../features/auth/selectors';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const token = useSelector(getToken);

  // 1. Завантаження кошика з сервера при вході
  useEffect(() => {
    const loadCart = async () => {
      if (token) {
        try {
          const response = await getUserData();
          const serverCart = response.data.bucketProducts.map((item) => ({
            ...item,
            qty: 1,
          }));
          setCart(serverCart);
        } catch (error) {
          console.error('Can`t load cart', error);
        }
      } else {
        setCart([]);
      }
    };
    loadCart();
  }, [token]);

  const addToCart = async (product, amount = 1) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) => (item._id === product._id ? { ...item, qty: item.qty + amount } : item)),
      );
      toast.success(`Added ${amount} items locally`);
    } else {
      try {
        await addToBucket(product._id);
        setCart((prev) => [...prev, { ...product, qty: amount }]);
        toast.success('Product added to bucket!');
      } catch (error) {
        if (error.response?.status === 400) {
          setCart((prev) => [...prev, { ...product, qty: amount }]);
        } else {
          toast.error('Failed to add to bucket');
        }
      }
    }
  };

  const removeFromCart = async (id) => {
    try {
      await removeFromBucket(id);
      setCart((prev) => prev.filter((item) => item._id !== id));
      toast.info('Removed from bucket');
    } catch (error) {
      console.error(error);
      toast.error('Failed to remove');
    }
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) => (item._id === id ? { ...item, qty: item.qty + 1 } : item)),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      (prev) =>
        prev
          .map((item) => (item._id === id ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0), // Якщо 0, фільтруємо (але краще не видаляти з API тут, а лишати 1)
    );
  };

  const clearLocalCart = () => {
    setCart([]);
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
