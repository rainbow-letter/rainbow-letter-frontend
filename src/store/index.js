/* eslint-disable import/no-cycle */
import {
  configureStore,
  combineReducers,
  // createListenerMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './auth-slice';
import userSlice from './user-slice';
import modalSlice from './modal-slice';
import adminLettersSlice from './admin/letter-slice';
import adminLetterUiSlice from './admin/letterUi-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  modal: modalSlice.reducer,
  adminLetters: adminLettersSlice.reducer,
  adminLetterUi: adminLetterUiSlice.reducer,
  // 여기에 다른 리듀서들을 추가
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const listenerMiddleware = createListenerMiddleware();
// export const { startListening, stopListening } = listenerMiddleware;

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(listenerMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export const persistor = persistStore(store);
