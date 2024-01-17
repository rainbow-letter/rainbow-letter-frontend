import React from 'react';
import LetterDetailForm from './LetterDetailForm';

function Viewer({ isOpen, content, onClose }) {
  if (!isOpen) return null;

  return (
    <LetterDetailForm isOpen={isOpen} content={content} onClose={onClose} />
  );
}

export default Viewer;
