import { ProductBtn, ProductCartBtn, ProductLikeBtn } from '../../../pages/ProductPage/styled';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../../../pages/CartPage/context/CartContext';
import { toast } from 'react-toastify';

const ProductBtnContainer = ({
  product,
  selectedQty = 1,
  selectedOptions = {},
  isDisabled = false,
}) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();

  if (!product) {
    return null;
  }

  const isInCart = cart.some((item) => item._id === product._id);

  const handleCartClick = () => {
    if (isDisabled && !isInCart) {
      toast.error('Please select all options first');
      return;
    }

    if (isInCart) {
      removeFromCart(product._id);
      toast.error(`${product.title || 'Item'} removed from cart.`);
    } else {
      addToCart(product, selectedQty, selectedOptions);
      toast.success(`${selectedQty} x ${product.title} added!`);
    }
  };

  const handleLikeBtnClick = () => {
    setLikeBtn((currentLike) => !currentLike);
  };

  return (
    <ProductBtn>
      <ProductCartBtn
        onClick={handleCartClick}
        $isActive={isInCart}
        disabled={!isInCart && isDisabled}
        style={{
          opacity: !isInCart && isDisabled ? 0.5 : 1,
          cursor: !isInCart && isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </ProductCartBtn>
      <ProductLikeBtn $isActive={likeBtn} onClick={handleLikeBtnClick}>
        <FaHeart />
      </ProductLikeBtn>
    </ProductBtn>
  );
};

export default ProductBtnContainer;
