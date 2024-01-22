/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleRowCheck, toggleInspection } from '../../../store/admin/letters';
import { formatDateToYYDDMMHHMM } from '../../../utils/date';
import { inspectReply } from '../../../api/reply';
import Editor from './Editor';
import Viewer from './Viewer';

function TableRow({ no, letter }) {
  const { id, memberId, createdAt, summary, content, reply, isChecked } =
    letter;
  const dispatch = useDispatch();
  const [isLetterViewerOpen, setIsLetterViewerOpen] = useState(false);
  const [isReplyViewerOpen, setIsReplyViewerOpen] = useState(false);
  const [isReplyEditorOpen, setIsReplyEditorOpen] = useState(false);

  const handleRowCheck = () => {
    dispatch(toggleRowCheck(id));
  };

  const handleInspect = async () => {
    await inspectReply(reply.id);
    dispatch(toggleInspection(reply.id));
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
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            checked={isChecked}
            onChange={handleRowCheck}
          />
        </div>
      </td>
      <td className="border p-2 text-center">{no}</td>
      <td className="border p-2 text-center">{memberId}</td>
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
          {reply.summary}
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
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            // TODO: 답장 발송 여부가 있으면 disabled 처리
            disabled={reply.inspection && reply.timestamp}
            checked={reply.inspection}
            onChange={handleInspect}
          />
        </div>
      </td>
      <td className="border p-2 text-center">{reply.timestamp && '성공'}</td>
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
        content={reply.content}
        onClose={toggleReplyViewer}
      />
      <Editor
        id={reply.id}
        isOpen={isReplyEditorOpen}
        content={reply.content}
        onClose={toggleReplyEditor}
      />
    </tr>
  );
}

export default TableRow;
