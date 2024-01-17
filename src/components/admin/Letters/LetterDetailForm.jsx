import React from 'react';
import { createPortal } from 'react-dom';

function LetterDetailForm({ isOpen, content = '편지 내용입니다.', onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="h-4/5 w-3/5 bg-white p-4 rounded-lg shadow-xl">
        <div className="flex justify-end mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onClose}
          >
            close
          </button>
        </div>
        <div className="w-full h-5/6 p-5 rounded-lg bg-gray-2">{content}</div>
      </div>
    </div>,
    document.body
  );
}

export default LetterDetailForm;
