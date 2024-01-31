/* eslint-disable no-shadow */
import { checkLetterStatus } from '../../utils/replyStatus';

const initialState = {
  letters: [],
};

export const LOAD_LETTERS = 'LOAD_LETTERS';
export const TOGGLE_ROW_CHECK = 'TOGGLE_ROW_CHECK';
export const TOGGLE_INSPECTION = 'TOGGLE_INSPECTION';
export const TOGGLE_ALL_CHECKS = 'TOGGLE_ALL_CHECKS';
export const UPDATE_SEND_DATE = 'UPDATE_SEND_DATE';
export const UPDATE_REPLY_CONTENT = 'UPDATE_REPLY_CONTENT';
export const SET_INSPECTION_TRUE = 'SET_INSPECTION_TRUE';

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

export const setInspectionTrue = (id) => {
  return {
    type: SET_INSPECTION_TRUE,
    payload: id,
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
        letters: state.letters.map((letter) => {
          if (letter.reply.id === action.payload) {
            const isCurrentlyInspected = letter.reply.inspection;
            const inspectionTime = isCurrentlyInspected
              ? null
              : new Date().toISOString();
            return {
              ...letter,
              reply: {
                ...letter.reply,
                inspection: !isCurrentlyInspected,
                inspectionTime,
                status: checkLetterStatus(
                  inspectionTime,
                  letter.reply.timestamp
                ),
              },
            };
          }

          return letter;
        }),
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
          letter.reply.id === action.payload.id
            ? {
                ...letter,
                reply: {
                  ...letter.reply,
                  content: action.payload.content,
                  summary: action.payload.summary,
                  inspectionTime: new Date().toISOString(),
                  status: checkLetterStatus(
                    new Date().toISOString(),
                    letter.reply.timestamp
                  ),
                },
              }
            : letter
        ),
      };
    case SET_INSPECTION_TRUE:
      return {
        ...state,
        letters: state.letters.map((letter) =>
          letter.reply.id === action.payload
            ? {
                ...letter,
                reply: {
                  ...letter.reply,
                  inspection: true,
                },
              }
            : letter
        ),
      };
    default:
      return state;
  }
}
