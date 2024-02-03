/* eslint-disable consistent-return */

import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import {
  updateReplyContent,
  setInspectionTrue,
} from '../../../store/admin/letters';
import { editReply, inspectReply } from '../../../api/reply';
import { extractFirstTenChars } from '../../../utils/string';
import LetterDetailForm from './LetterDetailForm';

function Editor({ id, isOpen, content, isSent, onClose }) {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  const handleSave = async (newContent) => {
    if (isSent) return alert('이미 답장을 보낸 편지입니다.');
    try {
      const newSummary = extractFirstTenChars(newContent);

      await editReply(id, {
        summary: newSummary,
        content: newContent,
      });

      await inspectReply(id);
      dispatch(setInspectionTrue(id));
      dispatch(updateReplyContent(id, newContent, newSummary));
      onClose();
    } catch (error) {
      console.log(error);
    }
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
