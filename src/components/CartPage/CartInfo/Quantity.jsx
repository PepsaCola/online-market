import { QuantityControl } from '../../../pages/CartPage/styled';
import { GoDash, GoPlus } from 'react-icons/go';

const Quantity = ({ itemQty, onDecrease, onIncrease }) => {
  return (
    <QuantityControl>
      <button type="button" onClick={onDecrease}>
        <GoDash />
      </button>
      <p>{itemQty}</p>
      <button type="button" onClick={onIncrease}>
        <GoPlus />
      </button>
    </QuantityControl>
  );
};

export default Quantity;
