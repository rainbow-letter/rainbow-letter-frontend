export const setSessionAutoSaveID = (id: string) => {
  return sessionStorage.setItem('activeTab', id);
};

export const getSessionAutoSaveID = () => {
  return sessionStorage.getItem('activeTab');
};
