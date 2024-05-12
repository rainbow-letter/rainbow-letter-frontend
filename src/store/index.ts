import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import modalSlice from 'store/modal/modal-slice';
import userSlice from 'store/user/user-slice';
import petSlice from 'store/pet/pet-slice';
import letterSlice from 'store/letter/letter-slice';
import adminLettersSlice from './admin/letter-slice';
import adminLetterUiSlice from './admin/letterUi-slice';
import { setupListeners } from './listeners';

export const listenerMiddleware = createListenerMiddleware();
export const { startListening, stopListening } = listenerMiddleware;

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer,
    pet: petSlice.reducer,
    letter: letterSlice.reducer,
    adminLetters: adminLettersSlice.reducer,
    adminLetterUi: adminLetterUiSlice.reducer,
    // 여기에 다른 리듀서들을 추가
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners({ startListening });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
