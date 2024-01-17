/* eslint-disable import/no-cycle */
import React from 'react';

import ModalLayOut from './ModalLayOut';
import ModalSection from './ModalSection';
import ModalContainer from './ModalContainer';
import ModalContents from './ModalContents';

export default function Modal() {
  return (
    <ModalLayOut>
      <ModalSection>
        <ModalContainer>
          <ModalContents />
        </ModalContainer>
      </ModalSection>
    </ModalLayOut>
  );
}
