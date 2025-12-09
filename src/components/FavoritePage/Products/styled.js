import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
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

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const TableHead = styled.thead`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  @media (max-width: 600px) {
    display: block;
  }
`;

export const HeaderRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const HeaderText = styled.th`
  padding: 24px 0;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: left;

  &:first-child {
    padding-left: 32px;
  }
`;
