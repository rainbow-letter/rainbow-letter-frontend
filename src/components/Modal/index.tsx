import React from 'react';

import ModalLayOut from 'components/Modal/ModalLayOut';
import ModalSection from 'components/Modal/ModalSection';
import ModalContainer from 'components/Modal/ModalContainer';
import ModalContents from 'components/Modal/ModalContents';

type Props = {
  isLocalOpen?: boolean;
  localModalContents?: React.ReactNode;
};

export default function Modal({ isLocalOpen, localModalContents }: Props) {
  return (
    <ModalLayOut>
      <ModalSection isLocalOpen={isLocalOpen}>
        <ModalContainer>
          {localModalContents || <ModalContents />}
        </ModalContainer>
      </ModalSection>
    </ModalLayOut>
  );
}
