/* eslint-disable default-param-last */
const initialState = {
  letters: [],
};

export const LOAD_LETTERS = 'LOAD_LETTERS';
export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export const TOGGLE_ALL_CHECKS = 'TOGGLE_ALL_CHECKS';
export const UPDATE_SEND_DATE = 'UPDATE_SEND_DATE';

// 편지 데이터 로드
// eslint-disable-next-line no-shadow
export const loadLetters = (letters) => {
  return {
    type: LOAD_LETTERS,
    payload: letters,
  };
};

// 개별 체크박스 토글
export const toggleCheck = (id) => {
  return {
    type: TOGGLE_CHECK,
    payload: id,
  };
};

// 모든 체크박스 토글
export const toggleAllChecks = (isChecked) => {
  return {
    type: TOGGLE_ALL_CHECKS,
    payload: isChecked,
  };
};

// 답장 발송일 업데이트
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
            ? { ...letter, sentDate: new Date().toISOString() }
            : letter
        ),
      };
    default:
      return state;
  }
}
