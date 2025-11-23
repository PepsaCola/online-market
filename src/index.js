import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import { store } from './app/store';
import { CartProvider } from './pages/CartPage/context/CartContext';
import { WishlistProvider } from './features/favorite/favorite';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
          <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
