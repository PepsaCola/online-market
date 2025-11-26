import { ProductBtn, ProductCartBtn, ProductLikeBtn } from '../../../pages/ProductPage/styled';
import { FaHeart } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../features/auth/selectors';
import { addBucketThunk, deleteBucketThunk } from '../../../features/auth/bucketThunks';
import { useWishlist } from '../../../features/products/favorite';

const ProductBtnContainer = ({ product, selectedQty = 1, isDisabled = false }) => {
  const cart = useSelector(getCarts);
  const dispatch = useDispatch();

  const { isItemInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isLiked = isItemInWishlist(product._id);

  if (!product) {
    return null;
  }

  const isInCart = cart.some((item) => item.item?._id === product._id);

  const handleCartClick = () => {
    if (isDisabled) {
      toast.error('Please select all options first');
      return;
    }

    if (isInCart) {
      dispatch(deleteBucketThunk({ id: product._id }));
      toast.error(`${product.title || 'Item'} removed from cart.`);
    } else {
      dispatch(addBucketThunk({ id: product._id }));
      toast.success(`${selectedQty} x ${product.title} added!`);
    }
  };

  const handleLikeBtnClick = () => {
    if (isLiked) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
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
      <ProductLikeBtn $isActive={isLiked} onClick={handleLikeBtnClick}>
        <FaHeart />
      </ProductLikeBtn>
    </ProductBtn>
  );
};

export default ProductBtnContainer;
