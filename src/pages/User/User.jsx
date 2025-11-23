import React from 'react';
import {
  Container,
  InformationTitle,
  EditInfo,
  Photo,
  CameraIcon,
  Buttons,
  EditButton,
  DeleteButton,
  SignUpInfo,
  LeftInfo,
  RightInfo,
  Input,
  Label,
  OrderContainer,
  OrderLeft,
  OrderRight,
  OrderHeader,
  ProductRow,
  ProductImage,
  ProductInfoBox,
  SummaryCard,
  SummaryHeader,
  SummaryRow,
  TotalRow,
} from './styled';

import { useCart } from '../../pages/CartPage/context/CartContext';

export const User = () => {
  const { cart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Container>
        <InformationTitle>Account Information</InformationTitle>

        <EditInfo>
          <Photo>
            <CameraIcon />
          </Photo>
          <Buttons>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </Buttons>
        </EditInfo>

        <SignUpInfo>
          <LeftInfo>
            <Label>
              First Name
              <Input placeholder={'Jane'} />
            </Label>
            <Label>
              Email
              <Input placeholder={'myemail@example.com'} />
            </Label>
          </LeftInfo>
          <RightInfo>
            <Label>
              Last Name
              <Input placeholder={'Smith'} />
            </Label>
            <Label>
              Phone Number
              <Input placeholder={'+38 (050) 25 55 555'} />
            </Label>
          </RightInfo>
        </SignUpInfo>

        <InformationTitle>Order History</InformationTitle>

        <OrderContainer>
          <OrderLeft>
            <OrderHeader>
              <span style={{ gridColumn: '1 / 2' }}></span>
              <span>QUANTITY</span>
              <span>TOTAL PRICE</span>
            </OrderHeader>

            {cart.length === 0 ? (
              <p style={{ padding: '20px', color: '#888' }}>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <ProductRow key={item._id}>
                  <ProductInfoBox>
                    <ProductImage
                      src={item.images?.[0] || 'https://via.placeholder.com/80'}
                      alt={item.title}
                    />
                    <h4>{item.title}</h4>
                  </ProductInfoBox>

                  <div className="qty">{item.qty}</div>
                  <div className="price">${(item.price * item.qty).toFixed(2)}</div>
                </ProductRow>
              ))
            )}
          </OrderLeft>

          <OrderRight>
            <SummaryCard>
              <SummaryHeader>#23199 02.09.2025</SummaryHeader>

              <SummaryRow>
                <div>
                  <span>Full Name</span>
                  <p>Jane Smith</p>
                </div>
                <div>
                  <span>Payment Card</span>
                  <p>*** *** *** **** 2315</p>
                </div>
              </SummaryRow>

              <SummaryRow>
                <div>
                  <span>City</span>
                  <p>Kyiv</p>
                </div>
                <div>
                  <span>Phone</span>
                  <p>+380 (050) 55 55 525</p>
                </div>
              </SummaryRow>

              <SummaryRow>
                <div style={{ width: '100%' }}>
                  <span>Shipping Address</span>
                  <p>Politechnicna st. 208/4</p>
                </div>
              </SummaryRow>

              <TotalRow>
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </TotalRow>
            </SummaryCard>
          </OrderRight>
        </OrderContainer>
      </Container>
    </>
  );
};
