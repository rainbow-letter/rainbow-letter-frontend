import React from 'react';
import { createPortal } from 'react-dom';

import LetterDetailForm from './LetterDetailForm';

function Viewer({ id, isOpen, isGptReply, content, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <LetterDetailForm
      id={id}
      mode="view"
      isOpen={isOpen}
      isGptReply={isGptReply}
      content={content}
      onClose={onClose}
    />,
    document.body
  );
}

export default Viewer;
