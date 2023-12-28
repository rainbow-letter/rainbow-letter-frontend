/* eslint-disable*/
const initialState = {
  isOpen: false,
  type: '',
};

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (data) => ({ type: OPEN_MODAL, data });
export const closeModal = () => ({ type: CLOSE_MODAL });

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        type: action.data,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        type: null,
      };
    default:
      return state;
  }
}
