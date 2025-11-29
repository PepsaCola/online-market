import styled from 'styled-components';
import ProductOptionItemContainer from './ProductInfo/ProductOptionItem';

const ProductOptions = styled.ul`
  margin-top: 60px;

  @media (max-width: 850px) {
    margin-top: 20px;
  }

  @media (max-width: 700px) {
    margin-top: 5px;
  }
`;

const ProductOption = styled.div`
  margin-top: 32px;

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;

const ProductOptionLabel = styled.h3`
  font-size: 20px;
  font-weight: 500;
  span {
    color: #444444;
  }

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const ProductOptionList = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 850px) {
    margin-top: 10px;
    gap: 8px;
  }
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
