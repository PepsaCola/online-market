import styled from 'styled-components';

const ImageList = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 34px;

  @media (max-width: 850px) {
    margin-top: 12px;
    margin-bottom: 24px;
  }
`;
const ImageItem = styled.img`
  border-radius: 8px;
  width: 120px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isActive ? '#2740B9' : 'transparent')};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.isActive ? '#007bff' : '#ccc')};
  }

  @media (max-width: 850px) {
    width: 80px;
  }
`;

const ProductImages = ({ images, onMainImgClick, activeImage }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ImageList>
      {images.map((img, i) => {
        const isActive = img === activeImage;

        return (
          <li key={i}>
            <ImageItem
              src={img}
              alt={img}
              onClick={() => onMainImgClick(img)}
              $isActive={isActive}
            />
          </li>
        );
      })}
    </ImageList>
  );
};

export default ProductImages;
