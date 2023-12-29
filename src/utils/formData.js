const generateFormData = (image) => {
  const formData = new FormData();
  formData.append('file', image);

  return formData;
};

export default generateFormData;
