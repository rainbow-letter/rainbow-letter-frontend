/* eslint-disable import/no-cycle */
import React from 'react';
import { createPortal } from 'react-dom';

import { generateReply } from '../../../api/reply';
import LetterDetailForm from './LetterDetailForm';

function Editor({ id, isOpen, content, onClose }) {
  if (!isOpen) return null;

  const handleSave = async () => {
    await generateReply(id);
    onClose();
  };

  return createPortal(
    <LetterDetailForm
      isOpen={isOpen}
      content={content}
      onClose={onClose}
      onSave={handleSave}
    />,
    document.body
  );
}

export default Editor;
