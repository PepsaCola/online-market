import styled from 'styled-components';
import ProductOptionItemContainer from './ProductOptionItem';

const ProductOptions = styled.ul`
  margin-top: 60px;
`;

const ProductOption = styled.div`
  margin-top: 32px;
`;

const ProductOptionLabel = styled.h3`
  font-size: 20px;
  font-weight: 500;
  span {
    color: #444444;
  }
`;

const ProductOptionList = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const ProductOptionsGroup = ({ options, selectedOptions, onOptionSelect }) => {
  return (
    <ProductOptions>
      {options.map((option, i) => {
        const currentSelection = selectedOptions[option.type];

        return (
          <ProductOption key={i}>
            <ProductOptionLabel>
              {option.type} / <span>{currentSelection || 'Not chosen'}</span>
            </ProductOptionLabel>
            <ProductOptionList>
              {option.variants.map((variant, index) => {
                const isActive = currentSelection === variant;

                return (
                  <ProductOptionItemContainer
                    key={index}
                    variant={variant}
                    option={option}
                    index={index}
                    onOptionSelect={onOptionSelect}
                    isActive={isActive}
                  />
                );
              })}
            </ProductOptionList>
          </ProductOption>
        );
      })}
    </ProductOptions>
  );
};

export default ProductOptionsGroup;
