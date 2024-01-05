/* eslint-disable import/prefer-default-export */
export const generateFormData = (image) => {
  const formData = new FormData();
  formData.append('file', image);

  return formData;
};
