import { useForm } from 'react-hook-form';
import {
  PaymentContainer,
  Title,
  PaymentFormContainer,
  FormRow,
} from '../../../pages/CartPage/styled';
import FormInput from './FormInput';
import { usePaymentSubmit } from '../../../hooks/usePaymentSubmit';

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handlePaymentSubmit } = usePaymentSubmit();

  return (
    <PaymentContainer>
      <Title>Payment Info</Title>
      <PaymentFormContainer onSubmit={handleSubmit(handlePaymentSubmit)}>
        <FormInput
          label="Full Name"
          id="name"
          name="name"
          placeholder="Taras Shevchenko"
          register={register}
          error={errors.name}
          rules={{
            required: 'Please enter your name',
            pattern: {
              value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
              message: 'Name can only contain letters',
            },
          }}
        />

        <FormInput
          label="Phone Number"
          id="phone"
          type="tel"
          name="phone"
          placeholder="+380997777777"
          register={register}
          error={errors.phone}
          rules={{
            required: true,
            pattern: {
              value: /^\+380\d{9}$/,
              message: 'Please enter a valid phone number',
            },
          }}
        />

        <FormInput
          label="City"
          id="city"
          name="city"
          placeholder="Kyiv"
          register={register}
          error={errors.city}
          rules={{
            required: 'Please enter a city',
            pattern: {
              value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
              message: 'City can only contain letters',
            },
          }}
        />

        <fieldset>
          <label>Shipping Address</label>
          <FormRow>
            <div style={{ flex: 1 }}>
              <FormInput
                label="Street"
                id="street"
                name="street"
                placeholder="Politehnichna"
                register={register}
                error={errors.street}
                rules={{
                  required: 'Please enter a street',
                  pattern: {
                    value: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/,
                    message: 'Street can only contain letters',
                  },
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <FormInput
                label="House Number"
                id="house_num"
                type="number"
                name="houseNum"
                placeholder="216"
                register={register}
                error={errors.houseNum}
                rules={{ required: 'Please enter a number' }}
              />
            </div>
          </FormRow>
        </fieldset>

        <FormInput
          label="Payment Card"
          id="card"
          name="card"
          placeholder="4441777777777777"
          register={register}
          error={errors.card}
          rules={{
            required: 'Please enter your card number',
            minLength: { value: 16, message: 'Please enter a valid 16-digit card number' },
            maxLength: { value: 16, message: 'Please enter a valid 16-digit card number' },
          }}
        />

        <button type="submit">Check Out</button>
      </PaymentFormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;
