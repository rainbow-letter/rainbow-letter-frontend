/* eslint-disable import/prefer-default-export */
export const editTextToFirstSentence = (text) => {
  const firstSentenceEnd = text.indexOf('. ');
  if (firstSentenceEnd !== -1 && firstSentenceEnd <= 20) {
    return text.substring(0, firstSentenceEnd + 1);
  }

  return text.substring(0, 20);
};
