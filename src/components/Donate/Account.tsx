import React from 'react';

export default function Account() {
  return (
    <section>
      <article className="rounded-[15px] bg-white py-[30px] text-center">
        <h2 className="my-3 text-heading-3-pc font-bold">후원계좌</h2>
        <p className="font-Pretendard text-[18px] tracking-[0.05rem]">
          토스뱅크 1001-2185-2735 이지영
        </p>
        <button
          type="button"
          className="mt-10 rounded-[2.25rem] bg-orange-400 px-[2.125rem] py-2.5 text-[1.25rem] font-bold text-white"
        >
          계좌 복사하기
        </button>
      </article>
      <div className="mt-8 text-center text-caption tracking-[0.56px] text-gray-1">
        <p className="font-Pretendard">사업자등록자번호 189-14-02502</p>
        <p className="font-Pretendard">상호 무지개편지 / 대표자 이지영</p>
      </div>
    </section>
  );
}
