/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { extractFirstTenChars } from 'utils/string';
import { editReply } from '../../../../../store/admin/letter-actions';
import LetterDetailForm from './LetterDetailForm';

function Editor({ id, isOpen, content, isSent, onClose }) {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  const handleSave = async (newContent) => {
    if (isSent) return alert('이미 답장을 보낸 편지입니다.');

    const newSummary = extractFirstTenChars(newContent);
    dispatch(
      editReply({
        replyId: id,
        editedReply: {
          summary: newSummary,
          content: newContent,
        },
      })
    );
    onClose();
  };

  return createPortal(
    <LetterDetailForm
      isOpen={isOpen}
      isSent={isSent}
      content={content}
      onClose={onClose}
      onSave={handleSave}
    />,
    document.body
  );
}

export default Editor;
