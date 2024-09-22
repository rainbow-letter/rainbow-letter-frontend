export const formatImageType = (data?: string) => {
  if (!data) return '';

  const baseURL = process.env.REACT_APP_API_URL;
  return `${baseURL}/api/images/resources/${data}`;
};
