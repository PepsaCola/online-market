import { CartContainer, CartInfo } from './styled';
import PaymentForm from '../../components/CartPage/PaymentForm/PaymentForm.jsx';
import CartItems from '../../components/CartPage/CartInfo/CartItems';
import { useSelector } from 'react-redux';
import { getCarts } from '../../features/auth/selectors';

const CartPage = () => {
  const cart = useSelector(getCarts);

  return (
    <CartContainer>
      <CartInfo>
        <h1>Cart</h1>
        {cart.length === 0 ? <p>You cart is empty</p> : <CartItems cart={cart} />}
      </CartInfo>

      <PaymentForm />
    </CartContainer>
  );
};

export default CartPage;
