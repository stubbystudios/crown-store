import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/CartProvider';

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById('root')
);