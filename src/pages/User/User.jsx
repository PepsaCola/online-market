import { useEffect, useState } from 'react';
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

import { getUserData } from '../../api/cartApi';
import { useSelector } from 'react-redux';
import { getToken } from '../../features/auth/selectors';
import { useNavigate } from 'react-router-dom';

export const User = () => {
  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState(null);
  const [localMeta, setLocalMeta] = useState({});
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const { items: allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const stored = JSON.parse(localStorage.getItem('orders_meta') || '{}');
      setLocalMeta(stored);
      console.log('Keys inside LocalStorage:', Object.keys(stored));
    } catch (e) {
      console.error(e);
    }

    const fetchHistory = async () => {
      try {
        const response = await getUserData();
        setUserData(response.data);
        const history = response.data.ordersHistory || [];
        setOrders(history.reverse());
        console.log('Orders from API:', history);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, [token, navigate]);

  const findSavedMeta = (orderDateString) => {
    if (localMeta[orderDateString]) {
      return localMeta[orderDateString];
    }

    const orderTime = new Date(orderDateString).getTime();

    const foundKey = Object.keys(localMeta).find((key) => {
      const localTime = new Date(key).getTime();
      const diff = Math.abs(orderTime - localTime);
      return diff < 2000;
    });

    return foundKey ? localMeta[foundKey] : {};
  };

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
              <Input placeholder={userData?.username || 'User'} readOnly />
            </Label>
            <Label>
              Email
              <Input placeholder={userData?.email || 'email@example.com'} readOnly />
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
            {orders.map((order) => {
              const meta = findSavedMeta(order.addedAt);

              const savedCustomer = meta.customer || {};
              const savedQuantities = meta.quantities || {};

              const displayName = savedCustomer.name || userData?.username || 'User';
              const displayCard = savedCustomer.card
                ? `**** ${savedCustomer.card.slice(-4)}`
                : '****';
              const displayCity = savedCustomer.city || '---';
              const displayPhone = savedCustomer.phone || '---';

              let displayAddress = 'Address not saved';
              if (savedCustomer.street && savedCustomer.houseNum) {
                displayAddress = `${savedCustomer.street}, ${savedCustomer.houseNum}`;
              }

              let calculatedTotal = 0;

              const renderedItems = order.items.map((item) => {
                const productId = item.product?._id || item.product || item._id || item;
                const productDetails =
                  allProducts.find((p) => p._id === productId) ||
                  (typeof item === 'object' ? item : {}) ||
                  {};

                const title = productDetails.title || item.product?.title || 'Unknown Product';
                const image =
                  productDetails.images?.[0] ||
                  item.product?.images?.[0] ||
                  'https://via.placeholder.com/80';
                const price = productDetails.price || item.product?.price || 0;

                const qty = savedQuantities[productId] || item.qty || 1;

                calculatedTotal += price * qty;

                return (
                  <ProductRow key={productId + Math.random()}>
                    <ProductInfoBox>
                      <ProductImage src={image} alt={title} />
                      <h4>{title}</h4>
                    </ProductInfoBox>
                    <div className="qty">{qty}</div>
                    <div className="price">${(price * qty).toFixed(2)}</div>
                  </ProductRow>
                );
              });

              const finalTotal =
                calculatedTotal > 0
                  ? calculatedTotal
                  : order.totalAmount
                    ? Number(order.totalAmount)
                    : 0;

              return (
                <OrderContainer key={order._id || order.id}>
                  <OrderLeft>
                    <OrderHeader>
                      <span style={{ gridColumn: '1 / 2' }}>Product</span>
                      <span>Quantity</span>
                      <span>Total Price</span>
                    </OrderHeader>
                    {renderedItems}
                  </OrderLeft>

                  <OrderRight>
                    <SummaryCard>
                      <SummaryHeader>
                        Order
                        <span style={{ fontSize: '14px', marginLeft: '10px', fontWeight: '400' }}>
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
                  </OrderRight>
                </OrderContainer>
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
};
