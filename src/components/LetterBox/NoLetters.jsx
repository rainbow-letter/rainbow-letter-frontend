import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

export default function NoLetters() {
  const navigate = useNavigate();

  return (
    <div className="h-[88vh] flex justify-center items-center">
      <section className="w-full flex flex-col gap-y-12 text-center">
        <div className="flex flex-col">
          <span className="p-2.5 text-heading-3">앗, 보낸 편지가 없어요</span>
          <span className="p-2.5 text-solo-medium">
            아이에게 편지를 보내볼까요?
          </span>
        </div>
        <Button onClick={() => navigate('/letter/write')}>편지쓰기</Button>
      </section>
    </div>
  );
}
