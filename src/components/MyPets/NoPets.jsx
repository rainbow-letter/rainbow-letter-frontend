import React from 'react';
import Button from '../Button';

function NoPets() {
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
        <Button value="등록하기" onClick={() => console.log('click!')} />
      </section>
    </div>
  );
}

export default NoPets;
