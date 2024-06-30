import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Account() {
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText('1001-2185-2735');
      toast.success('계좌번호가 복사되었어요');
    } catch (error) {
      toast.error('다시 시도해주세요.');
    }
  };

  return (
    <section>
      <article className="rounded-[15px] bg-white py-[30px] text-center">
        <h2 className="my-3 text-[1.375rem] font-bold">후원계좌</h2>
        <p className="font-Pretendard text-[1.125rem] tracking-[0.05rem]">
          토스뱅크 1001-2185-2735 이지영
        </p>
        <button
          type="button"
          onClick={handleCopyClipBoard}
          className="mt-10 rounded-[2.25rem] bg-orange-400 px-[2.125rem] py-2.5 text-[1.125rem] font-bold text-white"
        >
          계좌 복사하기
        </button>
      </article>
      <div className="mt-8 text-center text-caption tracking-[0.56px] text-gray-1">
        <p className="font-Pretendard">사업자등록자번호 189-14-02502</p>
        <p className="font-Pretendard">상호 무지개편지 / 대표자 이지영</p>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        rtl={false}
        closeButton={false}
        toastClassName={() =>
          'bg-white text-gray-1 border border-orange-400 rounded-[8px] flex items-center justify-center py-[14px] mb-16'
        }
        bodyClassName={() => 'flex font-normal'}
        limit={1}
      />
    </section>
  );
}
