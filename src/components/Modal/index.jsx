import React from 'react';

import ModalLayOut from './ModalLayOut';
import ModalSection from './ModalSection';
import ModalContainer from './ModalContainer';

export default function Modal() {
  return (
    <ModalLayOut>
      <ModalSection>
        <ModalContainer>이런 주제로도 써보세요</ModalContainer>
      </ModalSection>
    </ModalLayOut>
  );
}
