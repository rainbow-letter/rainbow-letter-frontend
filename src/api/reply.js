/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/replies/read';

export const readReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE}/${id}`);

  return response;
};

// For Admin
const RESOURSE_ADMIN = '/api/replies/admin';

export const generateReply = async (letterId) => {
  const response = await apiRequest.post(
    `${RESOURSE_ADMIN}/generate/${letterId}`
  );

  return response;
};

export const inspectReply = async (replyId) => {
  const response = await apiRequest.post(
    `${RESOURSE_ADMIN}/inspect/${replyId}`
  );

  return response;
};

export const submitReply = async (id, reply) => {
  const response = await apiRequest.post(`${RESOURSE_ADMIN}/${id}`, reply);

  return response;
};

// reply =
// {
//   "letterId" : 1,
//   "summary" : "답장 최종 제목",
//   "content" : "답장 최종 본문"
// }
