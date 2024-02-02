import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { sendReply, fetchLetters } from './admin/letter-actions';
import userSlice from './user-slice';
import modalSlice from './modal-slice';
import adminLettersSlice from './admin/letter-slice';
import adminLetterUiSlice from './admin/letterUi-slice';

export const listenerMiddleware = createListenerMiddleware();
export const { startListening, stopListening } = listenerMiddleware;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalSlice.reducer,
    adminLetters: adminLettersSlice.reducer,
    adminLetterUi: adminLetterUiSlice.reducer,
    // 여기에 다른 리듀서들을 추가
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

startListening({
  matcher: (action) => action.type === sendReply.fulfilled.type,
  effect: async (action, listenerApi) => {
    await listenerApi.dispatch(fetchLetters());
  },
});
