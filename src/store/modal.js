/* eslint-disable default-param-last */
const initialState = {
  isOpen: false,
  type: '',
  canOpenAgain: true,
};

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const DO_NOT_OPEN_AGAIN = 'DO_NOT_OPEN_AGAIN';

export const openModal = (data) => ({ type: OPEN_MODAL, data });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const doNotOpenAgain = () => ({ type: DO_NOT_OPEN_AGAIN });

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
    case DO_NOT_OPEN_AGAIN:
      return {
        ...state,
        canOpenAgain: false,
      };
    default:
      return state;
  }
}
