import React from 'react';
import LetterDetailForm from './LetterDetailForm';

function Editor({ isOpen, content = '편지 내용입니다.', onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <LetterDetailForm isOpen={isOpen} content={content} onClose={onClose} />
      <button type="submit">Save</button>
    </>
  );
}

export default Editor;
