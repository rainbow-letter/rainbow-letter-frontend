/* eslint-disable */
import React from 'react';
import ResisterButtonSection from '../components/Write/ResisterButtonSection';
import WritingPadSection from '../components/Write/WritingPadSection';
import ImageUploadSection from '../components/Write/ImageUploadSection';
import TopicSuggestion from '../components/Write/TopicSuggestion';
import Button from '../components/Button';

const IS_REGISTER_PET = false;

export default function WriteLetter() {
  return (
    <main>
      {!IS_REGISTER_PET && <ResisterButtonSection />}
      <WritingPadSection IS_REGISTER_PET={IS_REGISTER_PET} />
      <TopicSuggestion />
      <ImageUploadSection />
      <Button
        value={'편지 보내기'}
        // TODO
        onClick={() => alert('추후에 할거야')}
        className="mt-[58px]"
      />
    </main>
  );
}
