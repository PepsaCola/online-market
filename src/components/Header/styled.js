import styled from 'styled-components';
import { ReactComponent as Like } from '../../img/like.svg';
import { ReactComponent as Basket } from '../../img/basket.svg';
import { ReactComponent as Account } from '../../img/account.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 40px;
`;
export const Title = styled.h1`
  color: black;
  font-size: 24px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 32px;
`;
export const LikeIcon = styled(Like)`
  cursor: pointer;
`;
export const BasketIcon = styled(Basket)`
  cursor: pointer;
`;
export const AccountIcon = styled(Account)`
  cursor: pointer;
`;
