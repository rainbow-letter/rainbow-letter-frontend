/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { inspectReply } from '../../../store/admin/letter-actions';
import { adminLetterActions } from '../../../store/admin/letter-slice';
import { formatDateToYYDDMMHHMM } from '../../../utils/date';
import { extractFirstTenChars } from '../../../utils/string';
import Editor from './Editor';
import Viewer from './Viewer';

function TableRow({ no, letter, isChecked }) {
  const { id, email, createdAt, summary, content, reply } = letter;
  const dispatch = useDispatch();
  const [isLetterViewerOpen, setIsLetterViewerOpen] = useState(false);
  const [isReplyViewerOpen, setIsReplyViewerOpen] = useState(false);
  const [isReplyEditorOpen, setIsReplyEditorOpen] = useState(false);
  const isInspectionDisabled =
    reply.status === '성공' || reply.status === '실패' || reply.id === null;
  const gptReplySummary =
    reply.chatGptContent && extractFirstTenChars(reply.chatGptContent);

  const handleRowCheck = () => {
    dispatch(adminLetterActions.toggleLetterCheck(id));
  };

  const handleInspect = async () => {
    dispatch(inspectReply(reply.id));
  };

  const toggleLetterViewer = () => {
    setIsLetterViewerOpen((prev) => !prev);
  };

  const toggleReplyViewer = () => {
    setIsReplyViewerOpen((prev) => !prev);
  };

  const toggleReplyEditor = () => {
    setIsReplyEditorOpen((prev) => !prev);
  };

  return (
    <tr className="border-b">
      <td className="border p-2">
        <div className="flex justify-center items-center h-full overflow-hidden text-ellipsis whitespace-nowrap">
          <input
            className="form-checkbox h-5 w-5"
            type="checkbox"
            checked={isChecked}
            onChange={handleRowCheck}
          />
        </div>
      </td>
      <td className="border p-2 text-center">{no}</td>
      <td className="border p-2 text-center">{email}</td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(createdAt)}
      </td>
      <td className="border p-2">
        <button
          className="w-full text-left overflow-hidden text-ellipsis whitespace-nowrap"
          type="button"
          onClick={toggleLetterViewer}
        >
          {summary}
        </button>
      </td>
      <td className="border p-2">
        <button
          className="w-full text-left"
          type="button"
          onClick={toggleReplyViewer}
        >
          {gptReplySummary}
        </button>
      </td>
      <td className="border p-2">
        <button
          className="w-full text-left"
          type="button"
          onClick={toggleReplyEditor}
        >
          {reply.summary}
        </button>
      </td>
      <td className="border p-2">
        <div className="flex justify-center items-center h-full overflow-hidden text-ellipsis whitespace-nowrap">
          <input
            className={`form-checkbox h-5 w-5 ${
              reply.inspection || isInspectionDisabled
                ? 'appearance-auto accent-red-500'
                : 'appearance-none border border-red-400 rounded-sm'
            }`}
            type="checkbox"
            disabled={isInspectionDisabled}
            checked={reply.inspection}
            onChange={handleInspect}
          />
        </div>
      </td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(reply.inspectionTime)}
      </td>
      <td
        className={`border p-2 text-center ${
          reply.status === '실패' && 'text-red-600 text-bold'
        }`}
      >
        {reply.type === 'CHAT_GPT' ? '대기' : '발송'}
      </td>
      <td className="border p-2 text-center">
        {reply.timestamp && formatDateToYYDDMMHHMM(reply.timestamp)}
      </td>
      <Viewer
        id={id}
        isOpen={isLetterViewerOpen}
        content={content}
        onClose={toggleLetterViewer}
      />
      <Viewer
        id={id}
        isOpen={isReplyViewerOpen}
        content={reply.chatGptContent}
        onClose={toggleReplyViewer}
      />
      <Editor
        id={reply.id}
        isOpen={isReplyEditorOpen}
        content={reply.content}
        isSent={!!reply.timestamp}
        onClose={toggleReplyEditor}
      />
    </tr>
  );
}

export default TableRow;
