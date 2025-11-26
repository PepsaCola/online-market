import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import { persistor, store } from './app/store';
import { WishlistProvider } from './features/favorite/favorite';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <WishlistProvider>
            <App />
          </WishlistProvider>
          <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
