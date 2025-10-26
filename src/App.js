import { Route, Routes } from 'react-router-dom';
import { Shop } from './pages/Shop/Shop';
import { Shared } from './pages/Shared/Shared';
import { Main } from './pages/Main/Main';
import { ProductPage } from './pages/ProductPage/index';
import { SignUp } from './pages/SignUp/SignUp';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route index element={<Main />} />
        <Route path="shop" element={<Shop />} />
        <Route path="products/:id" element={<ProductPage />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
