/* eslint-disable no-shadow */
/* eslint-disable default-param-last */
const initialState = {
  letters: [],
};

export const LOAD_LETTERS = 'LOAD_LETTERS';
export const TOGGLE_ROW_CHECK = 'TOGGLE_ROW_CHECK';
export const TOGGLE_INSPECTION = 'TOGGLE_INSPECTION';
export const TOGGLE_ALL_CHECKS = 'TOGGLE_ALL_CHECKS';
export const UPDATE_SEND_DATE = 'UPDATE_SEND_DATE';
export const UPDATE_REPLY_CONTENT = 'UPDATE_REPLY_CONTENT';

export const loadLetters = (letters) => {
  return {
    type: LOAD_LETTERS,
    payload: letters,
  };
};

export const toggleRowCheck = (id) => {
  return {
    type: TOGGLE_ROW_CHECK,
    payload: id,
  };
};

export const toggleInspection = (id) => {
  return {
    type: TOGGLE_INSPECTION,
    payload: id,
  };
};

export const updateSendDate = (ids) => {
  return {
    type: UPDATE_SEND_DATE,
    payload: ids,
  };
};

export const updateReplyContent = (id, content, summary) => {
  return {
    type: UPDATE_REPLY_CONTENT,
    payload: { id, content, summary },
  };
};

export default function letters(state = initialState, action) {
  switch (action.type) {
    case LOAD_LETTERS:
      return {
        ...state,
        letters: action.payload.map((letter) => ({
          ...letter,
          isChecked: false,
        })),
      };
    case TOGGLE_ROW_CHECK:
      return {
        ...state,
        letters: state.letters.map((letter) =>
          letter.id === action.payload
            ? { ...letter, isChecked: !letter.isChecked }
            : letter
        ),
      };
    case TOGGLE_INSPECTION:
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
    case UPDATE_REPLY_CONTENT:
      return {
        ...state,
        letters: state.letters.map((letter) =>
          letter.id === action.payload.id
            ? {
                ...letter,
                reply: {
                  ...letter.reply,
                  content: action.payload.content,
                  summary: action.payload.summary,
                },
              }
            : letter
        ),
      };
    default:
      return state;
  }
}
