/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/replies/read';

export const readReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE}/${id}`);

  return response;
};

const RESOURSE_ADMIN = '/api/replies/admin';

export const generateReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE_ADMIN}/generate/${id}`);

  return response;
};

export const inspectReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE_ADMIN}/inspect/${id}`);

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
