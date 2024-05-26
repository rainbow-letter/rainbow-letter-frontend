import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store';

import Button from 'components/Button';

export default function SavedImage() {
  const savedImageUrl = useSelector(
    (state: RootState) => state.letter.saveImageUrl
  );
  const natigate = useNavigate();

  const onClickGoToHome = useCallback(() => {
    natigate('/');
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-heading-3 mt-4 mb-8">
        아래 편지를 꾹 눌러 저장해보세요!
      </p>
      <div className="border-orange-400 border-2 rounded-xl p-1">
        <img src={savedImageUrl} alt="사진 저장" style={{ maxWidth: '100%' }} />
      </div>
      <Button onClick={onClickGoToHome} className="mt-12">
        홈으로 가기
      </Button>
    </div>
  );
}
