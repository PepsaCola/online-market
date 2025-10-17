import { ProductBtn, ProductCartBtn, ProductLikeBtn } from '../../pages/ProductPage/styled';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const ProductBtnContainer = () => {
  const [cartBtn, setCartBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);

  const handleCartBtnClick = () => {
    setCartBtn((currentCart) => !currentCart);
  };

  const handleLikeBtnClick = () => {
    setLikeBtn((currentLike) => !currentLike);
  };

  return (
    <ProductBtn>
      <ProductCartBtn isActive={cartBtn} onClick={handleCartBtnClick}>
        {cartBtn ? 'Added to Cart' : 'Add to Cart'}
      </ProductCartBtn>
      <ProductLikeBtn isActive={likeBtn} onClick={handleLikeBtnClick}>
        <FaHeart />
      </ProductLikeBtn>
    </ProductBtn>
  );
};

export default ProductBtnContainer;
