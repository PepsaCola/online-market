import styled from 'styled-components';
import { ReactComponent as Search } from '../../img/search.svg';

export const Form = styled.form`
  width: 100%;
`;
export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  top: 27px;
  left: 35px;
  @media (max-width: 990px) {
    left: 25px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 700px) {
    left: 15px;
  }
`;
export const Input = styled.input`
  background: white;
  border-radius: 11px;
  border: 1px #d1d5db solid;
  padding: 26px 81px;
  outline: none;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #333333;
  font-size: 24px;
  @media (max-width: 990px) {
    padding: 24px 60px;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    padding: 24px 40px;
    font-size: 16px;
  }
`;
