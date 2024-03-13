import React from 'react';

import useDraggableScroll from 'hooks/useDraggableScroll';
import LetterItem from 'components/LetterShowcase/LetterItem';
import { SAMPLE_LETTERS } from 'components/LetterShowcase/constants';

function LetterShowcase() {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useDraggableScroll();

  return (
    <section className="pt-8 pl-5">
      <span className="py-5 text-solo-large font-bold">
        무지개에 걸린 편지 한 줄
      </span>
      <div
        className="flex py-5 gap-x-2.5 overflow-auto hide-scrollbar"
        role="presentation"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
      >
        {SAMPLE_LETTERS.map((letter) => (
          <LetterItem key={letter.id} letter={letter} />
        ))}
      </div>
    </section>
  );
}

export default LetterShowcase;
