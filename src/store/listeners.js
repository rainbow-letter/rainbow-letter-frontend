/* eslint-disable import/prefer-default-export */
import {
  inspectReply,
  sendReply,
  editReply,
  fetchLetters,
} from './admin/letter-actions';

export const setupListeners = ({ startListening }) => {
  startListening({
    matcher: (action) =>
      action.type === sendReply.fulfilled.type ||
      action.type === inspectReply.fulfilled.type,
    effect: async (action, listenerApi) => {
      await listenerApi.dispatch(fetchLetters());
    },
  });
  startListening({
    matcher: (action) => action.type === editReply.fulfilled.type,
    effect: async (action, listenerApi) => {
      const { inspection } = action.payload;
      if (inspection) return;

      const { replyId } = action.meta.arg;
      await listenerApi.dispatch(inspectReply(replyId));
    },
  });
};
