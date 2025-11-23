import styled, { css } from 'styled-components';

const ProductOptionItem = styled.li`
  list-style: none;
  .colorOption {
    border-radius: 50%;
    padding: 16px;
    cursor: pointer;

    border: 2px solid;
    transition: border-color 0.2s ease;
  }

  .otherOption {
    border-radius: 8px;
    background-color: white;
    padding: 10px 24px;
    border: 0.5px solid;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }
`;

export const OptionButton = styled.div`
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.optionType === 'color' &&
    css`
      border-radius: 50%;
      padding: 16px;
      border: 2px solid;
      background-color: ${props.variant};
      border-color: ${props.isActive ? '#2740B9' : '#eee'};

      &:hover {
        border-color: #2740b9;
      }
    `}

  ${(props) =>
    props.optionType !== 'color' &&
    css`
      border-radius: 8px;
      padding: 10px 24px;
      border: 0.5px solid;

      background-color: ${props.isActive ? '#4A6CF7' : 'white'};
      color: ${props.isActive ? 'white' : '#4A6CF7'};
      border-color: ${props.isActive ? '#4A6CF7' : '#ccc'};

      &:hover {
        background-color: ${props.isActive ? '#2740B9' : '#f0f0f0'};
      }
    `}
`;

const ProductOptionItemContainer = ({ index, variant, option, isActive, onOptionSelect }) => {
  const optionType = option.type.toLowerCase();

  return (
    <ProductOptionItem key={index}>
      <OptionButton
        onClick={() => onOptionSelect(option.type, variant)}
        optionType={optionType}
        variant={variant}
        isActive={isActive}
      >
        {optionType === 'color' ? '' : variant}
      </OptionButton>
    </ProductOptionItem>
  );
};

export default ProductOptionItemContainer;
