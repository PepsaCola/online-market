import { useCart } from '../pages/CartPage/context/CartContext';
import { buyAllProducts } from '../api/cartApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const usePaymentSubmit = () => {
  const { cart, clearLocalCart } = useCart();
  const navigate = useNavigate();

  const handlePaymentSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    try {
      const cartSnapshot = {};
      cart.forEach((item) => {
        cartSnapshot[item._id] = item.qty;
      });

      const response = await buyAllProducts();

      const createdOrder = response.data.order;
      const orderKey = createdOrder._id || createdOrder.addedAt;

      if (orderKey) {
        const existingData = JSON.parse(localStorage.getItem('orders_meta') || '{}');

        existingData[orderKey] = {
          customer: {
            name: data.name,
            phone: data.phone,
            city: data.city,
            street: data.street,
            houseNum: data.houseNum,
            card: data.card,
          },
          quantities: cartSnapshot,
        };

        localStorage.setItem('orders_meta', JSON.stringify(existingData));
      }

      clearLocalCart();
      toast.success('Order successfully created!');
      navigate('/user');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Payment failed');
    }
  };

  return { handlePaymentSubmit };
};
