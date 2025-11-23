import { CartItemsList, CartItemsContainer, TotalPrice } from '../../../pages/CartPage/styled';
import { RxCross2 } from 'react-icons/rx';
import Quantity from './Quantity';
import { useCart } from '../../../pages/CartPage/context/CartContext';

const CartItems = ({ cart }) => {
  const { increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const deleteFromCart = () => {};

  return (
    <>
      <CartItemsContainer>
        <ul className="cart-header">
          <h3>Title</h3>
          <h3>Quantity</h3>
          <h3>Total Price</h3>
          <span></span>
        </ul>
        <CartItemsList>
          {cart.map((item, index) => (
            <li key={index}>
              <div>
                <img src={item.images[0]} alt={item.title} />
                <p className="item-title">{item.title}</p>
              </div>
              <Quantity
                itemQty={item.qty}
                onIncrease={() => increaseQty(item._id)}
                onDecrease={() => decreaseQty(item._id)}
              />
              <p>${(item.price * item.qty).toFixed(2)}</p>
              <button className="delete_btn" onClick={deleteFromCart}>
                {' '}
                <RxCross2 />
              </button>
            </li>
          ))}
        </CartItemsList>
      </CartItemsContainer>
      <TotalPrice>Total: {totalPrice.toFixed(2)}</TotalPrice>
    </>
  );
};

export default CartItems;
