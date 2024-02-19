import React from 'react';
import { createPortal } from 'react-dom';

import LetterDetailForm from './LetterDetailForm';

function Viewer({ isOpen, content, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <LetterDetailForm
      mode="view"
      isOpen={isOpen}
      content={content}
      onClose={onClose}
    />,
    document.body
  );
}

export default Viewer;
