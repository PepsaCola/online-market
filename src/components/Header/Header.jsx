import React, { useState } from 'react';
import {
  AccountIcon,
  BasketIcon,
  Container,
  LikeIcon,
  Title,
  Wrap,
  BasketLink,
  StyledLink,
  LikeLink,
  Burger,
  MobileMenu, // Імпортуємо нові компоненти
  Overlay,
  CloseButton,
  MenuText,
  MenuWrap,
  MenuItem,
} from './styled';
import { useWishlist } from '../../features/products/favorite';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCarts } from '../../features/auth/selectors';

export const Header = () => {
  const cart = useSelector(getCarts);
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const handleAccountClick = () => {
    navigate('/user');
    setIsOpened(false); // Закриваємо меню після переходу
  };

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Container>
        <StyledLink to="/">
          <Title>MARKET</Title>
        </StyledLink>

        {/* Десктопне меню */}
        <Wrap>
          <LikeLink to="/favorite">
            <LikeIcon width={32} height={32} />
            <p>{wishlist.length}</p>
          </LikeLink>
          <BasketLink to="/cart">
            <BasketIcon width={32} height={32} />
            <p>{cart.length}</p>
          </BasketLink>
          <AccountIcon onClick={handleAccountClick} width={32} height={32} />
        </Wrap>

        {/* Кнопка Бургер */}
        <Burger src={'./icons/burger.svg'} onClick={toggleMenu} alt="menu" />
      </Container>

      {/* Затемнення фону (клік по ньому закриває меню) */}
      <Overlay isOpened={isOpened} onClick={closeMenu} />

      {/* Мобільне меню */}
      <MobileMenu isOpened={isOpened}>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>

        {/* Дублюємо навігацію для мобільного */}
        <MenuWrap>
          <MenuItem to="/favorite" onClick={closeMenu}>
            <LikeLink to="/favorite">
              <LikeIcon width={32} height={32} />
              <p>{wishlist.length}</p>
            </LikeLink>
            <MenuText>Обране</MenuText>
          </MenuItem>
          <MenuItem to="/cart" onClick={closeMenu}>
            <BasketLink to="/cart">
              <BasketIcon width={32} height={32} />
              <p>{cart.length}</p>
            </BasketLink>
            <MenuText>Кошик</MenuText>
          </MenuItem>

          <MenuItem to={'/user'} onClick={handleAccountClick}>
            <AccountIcon width={32} height={32} />
            <MenuText>Профіль</MenuText>
          </MenuItem>
        </MenuWrap>
      </MobileMenu>
    </>
  );
};
