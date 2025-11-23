import { useCart } from './context/CartContext.jsx';
import { CartContainer, CartInfo } from './styled';
import PaymentForm from '../../components/CartPage/PaymentForm.jsx';
import CartItems from '../../components/CartPage/CartInfo/CartItems';

const CartPage = () => {
  const { cart } = useCart();
  console.log(cart);

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
