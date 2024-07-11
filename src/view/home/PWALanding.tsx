import { useNavigate } from 'react-router-dom';

import { NoticeItems } from 'components/LandingPage/constants';
import Button from 'components/Button';
import chevronLeft from '../../assets/chevronLeft.svg';

export default function PWALanding() {
  const navigate = useNavigate();

  const onNextPageButtonClick = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="min-h-screen">
      <section className="flex pl-3">
        <button onClick={handleBack} type="button">
          <img alt="left" src={chevronLeft} />
        </button>
        <p className="mx-auto py-[10px] text-solo-large">공지사항</p>
      </section>
      {NoticeItems.map((item) => (
        <img
          key={item.id}
          alt="notice"
          className="object-cover"
          src={item.imageSrc}
        />
      ))}
      <div className="px-5 py-14">
        <Button
          disabled={false}
          id="service_start"
          onClick={onNextPageButtonClick}
        >
          무지개편지로 돌아가기
        </Button>
      </div>
    </main>
  );
}
