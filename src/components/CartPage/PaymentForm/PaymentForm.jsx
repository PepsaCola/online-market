import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { buyAllThunk } from '../../../features/auth/bucketThunks';
import { getCarts } from '../../../features/auth/selectors';

import {
  PaymentContainer,
  Title,
  PaymentFormContainer,
  FormRow,
} from '../../../pages/CartPage/styled';

const PaymentForm = () => {
  const cart = useSelector(getCarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!cart || cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    const cartSnapshot = {};
    const optionsSnapshot = {};

    cart.forEach((item) => {
      const itemId = item._id || item.item?._id;
      if (itemId) {
        cartSnapshot[itemId] = item.qty;
        optionsSnapshot[itemId] = item.selectedOptions || {};
      }
    });

    try {
      const resultAction = await dispatch(buyAllThunk());
      const response = await resultAction.payload;

      if (buyAllThunk.rejected.match(resultAction)) {
        throw new Error(response || 'Payment failed');
      }

      const createdOrder = response.order;
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

      toast.success('Order successfully created!');
      navigate('/user');
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Something went wrong');
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
              required: 'Phone is required',
              pattern: {
                value: /^\+380\d{9}$/,
                message: 'Format: +380xxxxxxxxx',
              },
            })}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </fieldset>

        <fieldset>
          <label>City</label>
          <input
            type="text"
            placeholder="Kyiv"
            {...register('city', {
              required: 'City is required',
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
                placeholder="Politehnichna"
                {...register('street', {
                  required: 'Street is required',
                })}
              />
              {errors.street && <p style={{ color: 'red' }}>{errors.street.message}</p>}
            </div>

            <div>
              <label>House Number</label>
              <input
                type="text"
                placeholder="216"
                {...register('houseNum', {
                  required: 'Required',
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
            placeholder="4441777777777777"
            {...register('card', {
              required: 'Card number is required',
              minLength: { value: 16, message: 'Must be 16 digits' },
              maxLength: { value: 16, message: 'Must be 16 digits' },
            })}
          />
          {errors.card && <p style={{ color: 'red' }}>{errors.card.message}</p>}
        </fieldset>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Check Out'}
        </button>
      </PaymentFormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;
