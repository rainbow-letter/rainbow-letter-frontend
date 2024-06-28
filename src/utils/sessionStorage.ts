/* eslint-disable no-param-reassign */

// NOTE: 세션 스토리지에 데이터 저장하기
export function saveToSessionStorage(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

// 세션 스토리지에서 데이터 가져오기
export function getFromSessionStorage(key: string) {
  const value = sessionStorage.getItem(key);
  try {
    // JSON으로 변환하여 반환
    if (!value) {
      throw new Error('There are no tokens.');
    }

    return JSON.parse(value);
  } catch (e) {
    // JSON 변환 실패 시 원래 문자열 반환
    return value;
  }
}

/**
 * 세션 스토리지에서 특정 데이터 삭제하기
 * @param {string} key - 삭제할 데이터의 키
 */
export function removeFromSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}

/**
 * 세션 스토리지에서 모든 데이터 삭제하기
 */
export function clearSessionStorage() {
  sessionStorage.clear();
}

export const setSessionAutoSaveID = (id: string) => {
  return sessionStorage.setItem('activeTab', id);
};

export const getSessionAutoSaveID = () => {
  return sessionStorage.getItem('activeTab');
};
