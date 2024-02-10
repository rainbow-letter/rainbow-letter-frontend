/* eslint-disable no-param-reassign */
/**
 * 세션 스토리지에 데이터 저장하기
 * @param {string} key - 저장할 데이터의 키
 * @param {*} value - 저장할 데이터 값 (객체는 문자열로 변환)
 */
export function saveToSessionStorage(key: string, value: string | boolean) {
  if (typeof value === 'object') {
    // 객체를 문자열로 변환
    value = JSON.stringify(value);
  }

  if (typeof value === 'string') {
    sessionStorage.setItem(key, value);
  }
}

/**
 * 세션 스토리지에서 데이터 가져오기
 * @param {string} key - 가져올 데이터의 키
 * @returns {*|null} - 저장된 데이터 또는 키가 없는 경우 null
 */
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
