/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleCheck } from '../../../store/admin/letters';
import { formatDateToYYDDMMHHMM } from '../../../utils/date';
import { inspectReply } from '../../../api/reply';
import Editor from './Editor';
import Viewer from './Viewer';

function TableRow({ letter }) {
  const { id, memberId, createdAt, summary, content, reply } = letter;
  const dispatch = useDispatch();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleCheck = async () => {
    await inspectReply(reply.id);
    dispatch(toggleCheck(reply.id));
  };

  const toggleViewer = () => {
    setIsViewerOpen((prev) => !prev);
  };

  const toggleEditor = () => {
    setIsEditorOpen((prev) => !prev);
  };

  return (
    <tr className="border-b">
      <td className="border p-2 text-center">{id}</td>
      <td className="border p-2 text-center">{memberId}</td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(createdAt)}
      </td>
      <td className="border p-2">
        <button
          className="w-full text-left overflow-hidden text-ellipsis whitespace-nowrap"
          type="button"
          onClick={toggleViewer}
        >
          {summary}
        </button>
      </td>
      <td className="border p-2">
        <button
          className="w-full text-left"
          type="button"
          onClick={toggleEditor}
        >
          {reply.summary}
        </button>
      </td>
      <td className="border p-2">
        <div className="flex justify-center items-center h-full overflow-hidden text-ellipsis whitespace-nowrap">
          <input
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            checked={reply.inspection}
            onChange={handleCheck}
          />
        </div>
      </td>
      <td className="border p-2 text-center">
        {reply.timestamp && formatDateToYYDDMMHHMM(reply.timestamp)}
      </td>
      <Viewer
        id={id}
        isOpen={isViewerOpen}
        content={content}
        onClose={toggleViewer}
      />
      <Editor
        id={id}
        isOpen={isEditorOpen}
        content={reply.content}
        onClose={toggleEditor}
      />
    </tr>
  );
}

export default TableRow;
