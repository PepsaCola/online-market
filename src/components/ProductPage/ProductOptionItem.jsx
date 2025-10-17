import styled from 'styled-components';

const ProductOptionItem = styled.li`
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

const ProductOptionItemContainer = ({ index, variant, option, isActive, onOptionSelect }) => {
  return (
    <ProductOptionItem key={index}>
      <div
        onClick={() => onOptionSelect(option.type, variant)}
        className={option.type.toLowerCase() === 'color' ? 'colorOption' : 'otherOption'}
        style={
          option.type.toLowerCase() === 'color'
            ? { backgroundColor: variant, borderColor: isActive ? '#2740B9' : '#eee' }
            : {
                borderColor: isActive ? '' : '#ccc',
                backgroundColor: isActive ? '#4A6CF7' : 'white',
                color: isActive ? 'white' : '#4A6CF7',
              }
        }
      >
        {option.type.toLowerCase() === 'color' ? '' : variant}
      </div>
    </ProductOptionItem>
  );
};

export default ProductOptionItemContainer;
