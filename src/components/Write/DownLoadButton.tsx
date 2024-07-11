import saveImg from '../../assets/detailLetter_save.svg';

type Props = {
  onClick: () => void;
};

export default function DownLoadButton({ onClick }: Props) {
  return (
    <button
      className="not-save absolute -top-[3.75rem] right-6 z-10"
      id="save-button"
      onClick={onClick}
      type="button"
    >
      <img alt="저장" className="fixed" src={saveImg} />
    </button>
  );
}
