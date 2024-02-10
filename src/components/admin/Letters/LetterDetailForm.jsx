import React, { useState, useRef } from 'react';

import useModalClose from 'hooks/useModalClose';

const MAX_CONTENT_LENGTH = 1000;
function LetterDetailForm({ mode, isOpen, isSent, content, onClose, onSave }) {
  const isViewer = mode === 'view';
  const modalRef = useRef();
  const [newContent, setNewContentValue] = useState(content);
  const isContentValidAndChanged =
    (content !== newContent && newContent.length <= MAX_CONTENT_LENGTH) ||
    !isSent;

  useModalClose(modalRef, onClose);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div
        className="h-3/5 w-4/5 bg-white p-4 rounded-lg shadow-xl flex flex-col justify-between"
        ref={modalRef}
      >
        <textarea
          className="w-full flex-1 p-5 mt-4 rounded-lg bg-gray-2 resize-none"
          disabled={isViewer}
          maxLength={MAX_CONTENT_LENGTH}
          value={newContent}
          onChange={({ target }) => setNewContentValue(target.value)}
        />
        <div
          className={`flex ${
            isViewer ? 'justify-end' : 'justify-between'
          } flex-wrap mt-3`}
        >
          {isViewer || (
            <div className="text-solo-label text-gray-1 mr-3">
              {`${newContent.length} / ${MAX_CONTENT_LENGTH}`}
            </div>
          )}
          <div className="flex">
            {isViewer || (
              <button
                className={`${
                  isContentValidAndChanged
                    ? 'bg-green-500 hover:bg-green-700'
                    : 'bg-green-300'
                } text-white font-bold py-2 px-4 mr-3 rounded`}
                type="button"
                disabled={!isContentValidAndChanged}
                onClick={() => onSave(newContent)}
              >
                저장
              </button>
            )}
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterDetailForm;
