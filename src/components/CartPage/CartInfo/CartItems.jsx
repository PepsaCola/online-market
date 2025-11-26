import { CartItemsList, CartItemsContainer, TotalPrice } from '../../../pages/CartPage/styled';
import { RxCross2 } from 'react-icons/rx';
import Quantity from './Quantity';
import { useDispatch } from 'react-redux';
import { addBucketThunk, deleteBucketThunk } from '../../../features/auth/bucketThunks';

const CartItems = ({ cart }) => {
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.item.price * item.quantity;
  }, 0);

  const handleIncrease = (id) => {
    dispatch(addBucketThunk({ id }));
  };

  const handleDecreaseOrRemove = (id) => {
    dispatch(deleteBucketThunk({ id }));
  };

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
            return (
              <li key={item.item._id || index}>
                <div>
                  <img
                    src={item.item.images?.[0] || 'https://via.placeholder.com/80'}
                    alt={item.item.title}
                  />
                  <div className="option-box">
                    <p className="item-title">{item.item.title}</p>
                  </div>
                </div>

                <Quantity
                  itemQty={item.quantity}
                  onIncrease={() => handleIncrease(item.item._id)}
                  onDecrease={() => handleDecreaseOrRemove(item.item._id)}
                />

                <p>${(item.item.price * item.quantity).toFixed(2)}</p>

                <button
                  className="delete_btn"
                  onClick={() => handleDecreaseOrRemove(item.item._id)}
                >
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
