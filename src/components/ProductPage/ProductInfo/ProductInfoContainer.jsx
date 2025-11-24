import StarRating from './StarRating';
import ProductOptionsGroup from '../ProductOptions';
import ProductBtnContainer from './ProductBtn';
import { ProductInfo } from '../../../pages/ProductPage/styled';
import { useState } from 'react';

const ProductInfoContainer = ({ singleProduct, options }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (optionType, variant) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: variant,
    }));
  };

  const isSelectionComplete =
    options && options.length > 0 ? Object.keys(selectedOptions).length === options.length : true;

  return (
    <ProductInfo>
      <h1>{singleProduct?.title}</h1>
      <StarRating rating={singleProduct?.rating || 4.5} />
      <p>${singleProduct?.price.toFixed(2)}</p>

      {options && options.length > 0 && (
        <ProductOptionsGroup
          options={options}
          selectedOptions={selectedOptions}
          onOptionSelect={handleOptionSelect}
        />
      )}

      <ProductBtnContainer
        product={singleProduct}
        selectedQty={1}
        selectedOptions={selectedOptions}
        isDisabled={!isSelectionComplete}
      />
    </ProductInfo>
  );
};

export default ProductInfoContainer;
