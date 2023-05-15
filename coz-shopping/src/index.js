import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import menuReducer from './modules/menu';
import bookmarkReducer from './modules/bookmark';
import GlobalStyle from './components/GlobalStyle';

const theme = {
  colors: {
    purple: '#412DD4',
    black: '#000000',
    lightgrey: '#888888',
    yellow: '#FFD361',
    grey: 'rgba(223, 223, 223, 0.81)',
    white: '#ffffff',
  },
};

const persistConfig = {
  key: 'bookmark',
  storage,
  whitelist: ['bookmark'],
};
const rootReducer = combineReducers({
  menu: menuReducer,
  bookmark: bookmarkReducer,
});

const store = createStore(persistReducer(persistConfig, rootReducer));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
