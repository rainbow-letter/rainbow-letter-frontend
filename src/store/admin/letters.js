/* eslint-disable no-shadow */
/* eslint-disable default-param-last */
const initialState = {
  letters: [],
};

export const LOAD_LETTERS = 'LOAD_LETTERS';
export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export const TOGGLE_ALL_CHECKS = 'TOGGLE_ALL_CHECKS';
export const UPDATE_SEND_DATE = 'UPDATE_SEND_DATE';

export const loadLetters = (letters) => {
  return {
    type: LOAD_LETTERS,
    payload: letters,
  };
};

export const toggleCheck = (id) => {
  return {
    type: TOGGLE_CHECK,
    payload: id,
  };
};

export const toggleAllChecks = (isChecked) => {
  return {
    type: TOGGLE_ALL_CHECKS,
    payload: isChecked,
  };
};

export const updateSendDate = (ids) => {
  return {
    type: UPDATE_SEND_DATE,
    payload: ids,
  };
};

export default function letters(state = initialState, action) {
  switch (action.type) {
    case LOAD_LETTERS:
      return {
        ...state,
        letters: action.payload,
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        letters: state.letters.map((letter) =>
          letter.reply.id === action.payload
            ? {
                ...letter,
                reply: {
                  ...letter.reply,
                  inspection: !letter.reply.inspection,
                },
              }
            : letter
        ),
      };
    case TOGGLE_ALL_CHECKS:
      return {
        ...state,
        letters: state.letters.map((letter) => ({
          ...letter,
          reply: {
            ...letter.reply,
            inspection: action.payload,
          },
        })),
      };
    case UPDATE_SEND_DATE:
      return {
        ...state,
        letters: state.letters.map((letter) =>
          action.payload.includes(letter.id)
            ? {
                ...letter,
                reply: {
                  ...letter.reply,
                  timestamp: new Date().toISOString(),
                },
              }
            : letter
        ),
      };
    default:
      return state;
  }
}
