import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  padding: 24px 32px;
  flex-basis: 100%;
`;

export const HeaderText = styled.div`
  color: #666;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.product-header {
    flex-basis: 48%;
  }
  &.price-header {
    flex-basis: 120px;
    text-align: left;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 24px;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;

export const EmptyText = styled.p`
  font-size: 20px;
  color: #888888;
  margin: 0;
`;
