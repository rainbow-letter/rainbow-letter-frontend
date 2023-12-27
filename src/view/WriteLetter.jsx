/* eslint-disable */
import { React, useRef } from 'react';
import ResisterButton from '../components/Write/ResisterButton';
import WritingPad from '../components/Write/WritingPad';

const IS_REGISTER_PET = false;

export default function WriteLetter() {
  return (
    <main>
      {!IS_REGISTER_PET && <ResisterButton />}

      <WritingPad IS_REGISTER_PET={IS_REGISTER_PET} />
    </main>
  );
}
