/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/replies/read';

export const readReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE}/${id}`);

  return response;
};

// For Admin
const RESOURSE_ADMIN = '/api/replies/admin';

// 답장 재생성
export const generateReply = async (letterId) => {
  const response = await apiRequest.post(
    `${RESOURSE_ADMIN}/generate/${letterId}`
  );

  return response;
};

/**
 * GPT 답장을 편집합니다.
 *
 * @param {number} replyId - 편집할 답장의 고유 ID.
 * @param {object} editedReply - 편집된 답장 내용. 이 객체는 다음과 같은 필드를 포함해야 합니다:
 *   @param {string} editedReply.summary - 편집된 답장의 내용.
 *   @param {string} editedReply.content - 편집된 답장의 내용.
 * @returns {Promise<object>} 편집된 답장에 대한 응답 데이터를 담은 프로미스 객체를 반환합니다.
 * @throws {Error} API 요청에 실패하면 에러가 발생합니다.
 */

export const editReply = async (replyId, editedReply) => {
  const response = await apiRequest.put(
    `${RESOURSE_ADMIN}/${replyId}`,
    editedReply
  );

  return response;
};

// 답장 검수
export const inspectReply = async (replyId) => {
  const response = await apiRequest.post(
    `${RESOURSE_ADMIN}/inspect/${replyId}`
  );

  return response;
};

/**
 * GPT 답장을 유저에게 전송합니다.
 *
 * @param {number|string} replyId - 제출할 답장의 고유 ID.
 * @param {object} letterId - 이 객체는 다음과 같은 필드를 포함해야 합니다:
 *   @param {number} letterId.letterId - 해당 답장이 연결된 편지의 고유 ID.
 * @returns {Promise<object>} API 요청의 결과를 담은 프로미스 객체를 반환합니다. 이 객체는 답장 제출에 대한 응답 데이터를 포함합니다.
 * @throws {Error} API 요청에 실패하면 에러가 발생합니다.
 */

export const submitReply = async (replyId, letterId) => {
  const response = await apiRequest.post(
    `${RESOURSE_ADMIN}/submit/${replyId}`,
    letterId
  );

  return response;
};
