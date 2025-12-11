import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;

  padding: 0 16px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

export const EmptyText = styled.p`
  font-size: 18px;
  color: #888;
`;
