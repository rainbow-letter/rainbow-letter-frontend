import DefaultImage from 'assets/Logo_256px.png';

export const formatImageType = (data?: string) => {
  if (!data) return DefaultImage;

  const baseURL = process.env.REACT_APP_API_URL;
  return `${baseURL}/api/images/resources/${data}`;
};
