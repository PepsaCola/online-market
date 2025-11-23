import { ProductBtn, ProductCartBtn, ProductLikeBtn } from '../../../pages/ProductPage/styled';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../../../pages/CartPage/context/CartContext';
import { toast } from 'react-toastify';

const ProductBtnContainer = ({ product }) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();

  if (!product) {
    return null;
  }

  const isInCart = cart.some((item) => item._id === product._id);

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product._id);
      toast.error(`${product.title || 'Item'} removed from cart.`);
    } else {
      addToCart(product);
      toast.success(`${product.title || 'Item'} added to cart!`);
    }
  };

  const handleLikeBtnClick = () => {
    setLikeBtn((currentLike) => !currentLike);
  };

  return (
    <ProductBtn>
      <ProductCartBtn onClick={handleCartClick} isActive={isInCart}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </ProductCartBtn>
      <ProductLikeBtn isActive={likeBtn} onClick={handleLikeBtnClick}>
        <FaHeart />
      </ProductLikeBtn>
    </ProductBtn>
  );
};

export default ProductBtnContainer;
