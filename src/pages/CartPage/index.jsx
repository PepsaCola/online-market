import { useCart } from './context/CartContext.jsx';

const CartPage = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>You cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
