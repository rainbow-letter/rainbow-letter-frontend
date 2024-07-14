import { useCallback } from 'react';
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
      <p className="mb-8 mt-4 text-heading-3">
        아래 편지를 꾹 눌러 저장해보세요!
      </p>
      <div className="rounded-xl border-2 border-orange-400 p-1">
        <img src={savedImageUrl} alt="사진 저장" style={{ maxWidth: '100%' }} />
      </div>
      <Button onClick={onClickGoToHome} className="mt-12">
        홈으로 가기
      </Button>
    </div>
  );
}
