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
`;
