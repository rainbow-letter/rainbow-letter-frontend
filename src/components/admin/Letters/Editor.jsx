/* eslint-disable import/no-cycle */
import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { updateReplyContent } from '../../../store/admin/letters';
import { editReply } from '../../../api/reply';
import { editTextToFirstSentence } from '../../../utils/string';
import LetterDetailForm from './LetterDetailForm';

function Editor({ id, isOpen, content, onClose }) {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  const handleSave = async (newContent) => {
    const newSummary = editTextToFirstSentence(newContent);

    await editReply(id, {
      summary: newSummary,
      content: newContent,
    });

    dispatch(updateReplyContent(id, newContent, newSummary));
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
