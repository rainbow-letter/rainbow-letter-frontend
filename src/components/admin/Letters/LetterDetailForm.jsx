import React, { useState, useRef } from 'react';

import useModalClose from '../../../hooks/useModalClose';

function LetterDetailForm({ mode, isOpen, content, onClose, onSave }) {
  const isViewer = mode === 'view';
  const modalRef = useRef();
  const [contentValue, setContentValue] = useState(content);

  useModalClose(modalRef, onClose);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div
        className="h-3/5 w-4/5 bg-white p-4 rounded-lg shadow-xl"
        ref={modalRef}
      >
        <textarea
          className="w-full h-5/6 p-5 mt-4 rounded-lg bg-gray-2 resize-none"
          disabled={isViewer}
          value={contentValue}
          onChange={({ target }) => setContentValue(target.value)}
        />
        <div className="flex justify-end mt-3">
          {isViewer || (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-3 rounded"
              type="button"
              onClick={onSave}
            >
              save
            </button>
          )}
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default LetterDetailForm;
