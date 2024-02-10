import React from 'react';

import ModalLayOut from 'components/Modal/ModalLayOut';
import ModalSection from 'components/Modal/ModalSection';
import ModalContainer from 'components/Modal/ModalContainer';
import ModalContents from 'components/Modal/ModalContents';

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
