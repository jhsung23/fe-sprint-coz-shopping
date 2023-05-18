import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import menuReducer from '../modules/menu';
import bookmarkReducer from '../modules/bookmark';
import filterReducer from '../modules/filter';
import toastReducer from '../modules/toast';
import modalReducer from '../modules/modal';

const rootReducer = combineReducers({
  menu: menuReducer,
  bookmark: bookmarkReducer,
  filter: filterReducer,
  toast: toastReducer,
  modal: modalReducer,
});

const persistConfig = {
  key: 'bookmark',
  storage,
  whitelist: ['bookmark'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
