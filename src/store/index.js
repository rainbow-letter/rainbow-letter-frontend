/* eslint-disable */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import modal from './modal';
import letters from './admin/letters';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'modal', 'letter'],
};

const rootReducer = combineReducers({ user, modal, letters });

export default persistReducer(persistConfig, rootReducer);
