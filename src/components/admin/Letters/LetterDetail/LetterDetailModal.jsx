import React, { createPortal } from 'react-dom';
import LetterDetailForm from './LetterDetailForm';

const LetterDetailModal = ({ letterId, onLetterClick }) => {
  return createPortal(
    <div className="fixed left-0 top-0 z-10 w-full bg-white">
      <LetterDetailForm
        letterId={letterId}
        isModal
        onLetterClick={onLetterClick}
      />
    </div>,
    document.body
  );
};

export default LetterDetailModal;
