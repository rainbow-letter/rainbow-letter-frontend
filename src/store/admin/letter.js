// actionTypes.js
export const LOAD_LETTERS = 'LOAD_LETTERS';
export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export const TOGGLE_ALL_CHECKS = 'TOGGLE_ALL_CHECKS';
export const UPDATE_SEND_DATE = 'UPDATE_SEND_DATE';

// 편지 데이터 로드
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
