import { CartItemsList, CartItemsContainer, TotalPrice } from '../../../pages/CartPage/styled';
import { RxCross2 } from 'react-icons/rx';
import Quantity from './Quantity';
import { useCart } from '../../../pages/CartPage/context/CartContext';

const CartItems = ({ cart }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

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
          {cart.map((item, index) => {
            const optionsStr = item.selectedOptions
              ? Object.entries(item.selectedOptions)
                  .map(([key, val]) => `${key}: ${val}`)
                  .join(', ')
              : '';

            return (
              <li key={item._id || index}>
                <div>
                  <img
                    src={item.images?.[0] || 'https://via.placeholder.com/80'}
                    alt={item.title}
                  />
                  <div className="option-box">
                    <p className="item-title">{item.title}</p>
                    {optionsStr && <p className="options">{optionsStr}</p>}
                  </div>
                </div>

                <Quantity
                  itemQty={item.qty}
                  onIncrease={() => increaseQty(item._id)}
                  onDecrease={() => decreaseQty(item._id)}
                />

                <p>${(item.price * item.qty).toFixed(2)}</p>

                <button className="delete_btn" onClick={() => removeFromCart(item._id)}>
                  <RxCross2 />
                </button>
              </li>
            );
          })}
        </CartItemsList>
      </CartItemsContainer>
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
    </>
  );
};

export default CartItems;
