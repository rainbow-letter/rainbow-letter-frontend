import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { regenerateReply } from 'store/admin/letter-actions';
import useModalClose from 'hooks/useModalClose';

const MAX_CONTENT_LENGTH = 1000;
function LetterDetailForm({
  id,
  mode,
  isOpen,
  isSent,
  isGptReply = false,
  content,
  onClose,
  onSave,
}) {
  const dispatch = useDispatch();
  const isViewer = mode === 'view';
  const modalRef = useRef();
  const [newContent, setNewContentValue] = useState(content);
  const isContentValidAndChanged =
    (content !== newContent && newContent.length <= MAX_CONTENT_LENGTH) ||
    !isSent;

  useModalClose(modalRef, onClose);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="flex h-3/5 w-4/5 flex-col justify-between rounded-lg bg-white p-4 shadow-xl"
        ref={modalRef}
      >
        <textarea
          className="mt-4 w-full flex-1 resize-none rounded-lg bg-gray-2 p-5"
          disabled={isViewer}
          maxLength={MAX_CONTENT_LENGTH}
          value={newContent}
          onChange={({ target }) => setNewContentValue(target.value)}
        />
        <div
          className={`flex ${
            isViewer ? 'justify-end' : 'justify-between'
          } mt-3 flex-wrap`}
        >
          {isViewer || (
            <div className="mr-3 text-solo-label text-gray-1">
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
                } mr-3 rounded px-4 py-2 font-bold text-white`}
                type="button"
                disabled={!isContentValidAndChanged}
                onClick={() => onSave(newContent)}
              >
                저장
              </button>
            )}
            {isGptReply && (
              <button
                className="mr-3 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                type="button"
                onClick={() => {
                  dispatch(regenerateReply(id)).then(() => onClose());
                }}
              >
                재생성
              </button>
            )}
            <button
              className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
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
