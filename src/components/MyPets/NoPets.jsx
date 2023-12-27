import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

function NoPets() {
  const navigate = useNavigate();

  return (
    <div className="h-[88vh] flex justify-center items-center">
      <section className="w-full flex flex-col gap-y-10 text-center">
        <div className="flex flex-col">
          <span className="p-[10px] text-heading-3">
            앗, 편지를 받을 아이가 없어요.
          </span>
          <span className="p-[10px] text-solo-medium">
            반려동물을 등록하러 가볼까요?
          </span>
        </div>
        <Button
          value="등록하기"
          onClick={() => navigate('/my-pets/register')}
        />
      </section>
    </div>
  );
}

export default NoPets;
