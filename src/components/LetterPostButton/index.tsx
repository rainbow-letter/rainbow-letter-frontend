import logo from 'assets/Logo_256px.png';
import { Link } from 'react-router-dom';

function LetterPostButton() {
  return (
    <section className="mx-5 pb-[1.875rem]">
      <Link
        className="flex h-10 w-full items-center justify-center gap-x-1 rounded-2xl"
        id="share_letter"
        style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)' }}
        target="_blank"
        to="https://walla.my/letter2"
      >
        <div className="size-[15px]">
          <img alt="logo" height="100%" src={logo} width="100%" />
        </div>
        <span className="text-solo-small">내 편지도 걸어보기</span>
      </Link>
    </section>
  );
}

export default LetterPostButton;
