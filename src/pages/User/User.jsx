import React, { useEffect, useState } from 'react';
import {
  Container,
  InformationTitle,
  EditInfo,
  Photo,
  CameraIcon,
  Buttons,
  DeleteButton,
  SignUpInfo,
  LeftInfo,
  RightInfo,
  Input,
  Label,
  OrderBlock,
  OrderTableArea,
  OrderSummaryArea,
  TableWrapper,
  StyledTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  ProductImage,
  ProductInfoBox,
  SummaryCard,
  SummaryHeader,
  SummaryRow,
  TotalRow,
} from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../features/auth/selectors';
import { fetchCurrentUser, logout } from '../../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';

export const User = () => {
  const { user } = useSelector((state) => state.auth);
  const token = useSelector(getToken);
  const [localMeta, setLocalMeta] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: allProducts } = useSelector((state) => state.products);

  const orders = user?.ordersHistory ? [...user.ordersHistory].reverse() : [];

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate('/login', { replace: true });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!token) {
      navigate('/login');
      return;
    }
    dispatch(fetchCurrentUser());

    try {
      const stored = JSON.parse(localStorage.getItem('orders_meta') || '{}');
      setLocalMeta(stored);
    } catch (e) {
      console.error(e);
    }
  }, [token, navigate, dispatch]);

  const findSavedMeta = (orderDateString) => {
    if (localMeta[orderDateString]) return localMeta[orderDateString];
    const orderTime = new Date(orderDateString).getTime();
    const foundKey = Object.keys(localMeta).find((key) => {
      const localTime = new Date(key).getTime();
      return Math.abs(orderTime - localTime) < 5000;
    });
    return foundKey ? localMeta[foundKey] : {};
  };

  return (
    <Container>
      <InformationTitle>Account Information</InformationTitle>

      <EditInfo>
        <Photo>
          <CameraIcon />
        </Photo>
        <Buttons>
          <DeleteButton onClick={handleLogout}>Log out</DeleteButton>
        </Buttons>
      </EditInfo>

      <SignUpInfo>
        <LeftInfo>
          <Label>
            First Name
            <Input placeholder={user?.username || 'User'} readOnly />
          </Label>
          <Label>
            Email
            <Input placeholder={user?.email || 'email@example.com'} readOnly />
          </Label>
        </LeftInfo>
        <RightInfo>
          <Label>
            Last Name
            <Input placeholder={'Smith'} readOnly />
          </Label>
          <Label>
            Phone Number
            <Input placeholder={'+38 (050) ...'} readOnly />
          </Label>
        </RightInfo>
      </SignUpInfo>

      <InformationTitle>Order History</InformationTitle>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No orders yet</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
          {orders.map((order) => {
            const meta = findSavedMeta(order.addedAt);
            const savedCustomer = meta.customer || {};
            const savedQuantities = meta.quantities || {};
            const savedOptions = meta.options || {};

            const displayName = savedCustomer.name || user?.username || 'User';
            const displayCard = savedCustomer.card
              ? `**** ${savedCustomer.card.slice(-4)}`
              : '****';
            const displayCity = savedCustomer.city || '---';
            const displayPhone = savedCustomer.phone || '---';
            const displayAddress = savedCustomer.street
              ? `${savedCustomer.street}, ${savedCustomer.houseNum}`
              : 'Standard Delivery';

            const orderItems = order.items || [];

            const calculatedSum = orderItems.reduce((acc, item) => {
              const productId = item.product?._id || item.product || item._id || item;

              const productDetails =
                allProducts.find((p) => p._id === productId) ||
                (typeof item === 'object' ? item : {}) ||
                {};

              const price = productDetails.price || item.product?.price || 0;
              const qty = savedQuantities[productId] || item.qty || 1;

              return acc + price * qty;
            }, 0);

            const finalTotal =
              order.totalAmount && order.totalAmount > 0
                ? Number(order.totalAmount)
                : calculatedSum;

            return (
              <OrderBlock key={order._id || Math.random()}>
                <OrderTableArea>
                  <TableWrapper>
                    <StyledTable>
                      <TableHead>
                        <TableRow>
                          <TableHeader style={{ width: '60%' }}>Product</TableHeader>
                          <TableHeader style={{ width: '20%', textAlign: 'center' }}>
                            Quantity
                          </TableHeader>
                          <TableHeader style={{ width: '20%', textAlign: 'right' }}>
                            Price
                          </TableHeader>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orderItems.map((item) => {
                          const productId = item.product?._id || item.product || item._id || item;
                          const productDetails =
                            allProducts.find((p) => p._id === productId) ||
                            (typeof item === 'object' ? item : {}) ||
                            {};

                          const title =
                            productDetails.title || item.product?.title || 'Unknown Product';
                          const image =
                            productDetails.images?.[0] ||
                            item.product?.images?.[0] ||
                            'https://via.placeholder.com/80';
                          const price = productDetails.price || item.product?.price || 0;

                          const qty = savedQuantities[productId] || item.qty || 1;
                          const options = savedOptions[productId] || {};
                          const optionsStr = Object.entries(options)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(', ');

                          return (
                            <TableRow key={productId + Math.random()}>
                              <TableCell>
                                <ProductInfoBox>
                                  <ProductImage src={image} alt={title} />
                                  <div className="info-text">
                                    <h4>{title}</h4>
                                    {optionsStr && <span>{optionsStr}</span>}
                                  </div>
                                </ProductInfoBox>
                              </TableCell>
                              <TableCell style={{ textAlign: 'center' }}>{qty}</TableCell>
                              <TableCell style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                ${(price * qty).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </StyledTable>
                  </TableWrapper>
                </OrderTableArea>

                <OrderSummaryArea>
                  <SummaryCard>
                    <SummaryHeader>
                      Order
                      <span className="date">
                        ({new Date(order.addedAt || Date.now()).toLocaleDateString()})
                      </span>
                    </SummaryHeader>

                    <SummaryRow>
                      <div>
                        <span>Full Name</span>
                        <p>{displayName}</p>
                      </div>
                      <div>
                        <span>Payment Card</span>
                        <p>{displayCard}</p>
                      </div>
                    </SummaryRow>

                    <SummaryRow>
                      <div>
                        <span>City</span>
                        <p>{displayCity}</p>
                      </div>
                      <div>
                        <span>Phone</span>
                        <p>{displayPhone}</p>
                      </div>
                    </SummaryRow>

                    <SummaryRow>
                      <div style={{ width: '100%' }}>
                        <span>Shipping Address</span>
                        <p>{displayAddress}</p>
                      </div>
                    </SummaryRow>

                    <TotalRow>
                      <span>Total</span>

                      <span>${finalTotal.toFixed(2)}</span>
                    </TotalRow>
                  </SummaryCard>
                </OrderSummaryArea>
              </OrderBlock>
            );
          })}
        </div>
      )}
    </Container>
  );
};
