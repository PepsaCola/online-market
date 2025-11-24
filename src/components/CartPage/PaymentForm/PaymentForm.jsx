import { useForm } from 'react-hook-form';
import { useCart } from '../../../pages/CartPage/context/CartContext';
import { buyAllProducts } from '../../../api/cartApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  PaymentContainer,
  Title,
  PaymentFormContainer,
  FormRow,
} from '../../../pages/CartPage/styled';

const PaymentForm = () => {
  const { cart, clearLocalCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    try {
      const cartSnapshot = {};
      const optionsSnapshot = {};

      cart.forEach((item) => {
        cartSnapshot[item._id] = item.qty;
        optionsSnapshot[item._id] = item.selectedOptions || {};
      });

      const response = await buyAllProducts();

      const createdOrder = response.data.order;
      const orderKey = createdOrder.addedAt;

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
          options: optionsSnapshot,
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

  return (
    <PaymentContainer>
      <Title>Payment Info</Title>
      <PaymentFormContainer onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Taras Shevchenko"
            {...register('name', {
              required: 'Please enter your name',
              pattern: {
                value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
                message: 'Name can only contain letters',
              },
            })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </fieldset>
        <fieldset>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="+380997777777"
            {...register('phone', {
              required: true,
              pattern: {
                value: /^\+380\d{9}$/,
                message: 'Please enter a valid phone number',
              },
            })}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </fieldset>
        <fieldset>
          <label>City</label>
          <input
            type="text"
            id="city"
            placeholder="Kyiv"
            {...register('city', {
              required: 'Please enter a city',
              pattern: {
                value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
                message: 'City can only contain letters',
              },
            })}
          />
          {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}
        </fieldset>
        <fieldset>
          <label>Shipping Address</label>
          <FormRow>
            <div>
              <label>Street</label>
              <input
                type="text"
                id="street"
                placeholder="Politehnichna"
                {...register('street', {
                  required: 'Please enter a street',
                  pattern: {
                    value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
                    message: 'Street can only contain letters',
                  },
                })}
              />

              {errors.street && <p style={{ color: 'red' }}>{errors.street.message}</p>}
            </div>

            <div>
              <label>House Number</label>
              <input
                type="number"
                id="house_num"
                placeholder="216"
                {...register('houseNum', {
                  required: 'Please enter a number',
                })}
              />
              {errors.houseNum && <p style={{ color: 'red' }}>{errors.houseNum.message}</p>}
            </div>
          </FormRow>
        </fieldset>
        <fieldset>
          <label>Payment Card</label>
          <input
            type="text"
            id="card"
            placeholder="4441777777777777"
            {...register('card', {
              required: 'Please enter your card number',
              minLength: { value: 16, message: 'Please enter a valid 16-digit card number' },
              maxLength: { value: 16, message: 'Please enter a valid 16-digit card number' },
            })}
          />
          {errors.card && <p style={{ color: 'red' }}>{errors.card.message}</p>}
        </fieldset>
        <button type="submit">Check Out</button>
      </PaymentFormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;
