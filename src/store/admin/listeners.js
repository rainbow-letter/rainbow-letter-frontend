/* eslint-disable import/prefer-default-export */
import { startListening, stopListening } from '../index';
import { fetchLetters, sendReply } from './letter-actions';

export const setupReplyListener = ({ status }) => {
  if (status) {
    startListening({
      actionCreator: sendReply,
      effect: async (action, listenerApi) => {
        await listenerApi.dispatch(fetchLetters());
      },
    });
  } else {
    stopListening({
      actionCreator: sendReply,
    });
  }
};
