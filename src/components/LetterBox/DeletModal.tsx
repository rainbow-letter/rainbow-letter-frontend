import ErrorIcon from '../../assets/Error_icon.svg';

type Props = {
  setIsModalOpen: (isModalOpen: boolean) => void;
  onClickDeleteButton: () => void;
};

export default function DeleteModal({
  setIsModalOpen,
  onClickDeleteButton,
}: Props) {
  return (
    <div className="w-full px-[1.562rem] py-10">
      <header className="flex flex-col items-center justify-center text-center">
        <img src={ErrorIcon} alt="편지지" />
        <h3 className="mt-5 whitespace-pre-wrap text-heading-3 font-bold">
          선택한 편지를 삭제할까요?
        </h3>
        <span className="mt-3 text-[#FF0000]">
          삭제한 편지는 되돌릴 수 없어요.
        </span>
      </header>
      <div className="mt-[30px] flex gap-3">
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="rounded-[8px] border-none bg-gray-4 px-6 py-2.5 text-[16px] text-gray-5"
        >
          돌아가기
        </button>
        <button
          type="button"
          onClick={onClickDeleteButton}
          className="rounded-[8px] border-none bg-orange-400 px-6 py-2.5 text-[16px] text-white"
        >
          편지 삭제하기
        </button>
      </div>
    </div>
  );
}
