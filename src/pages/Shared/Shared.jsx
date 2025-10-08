import { Wrap } from './styled';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Shared = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
      <Footer />
    </Wrap>
  );
};
