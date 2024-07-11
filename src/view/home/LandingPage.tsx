import { useNavigate } from 'react-router-dom';

import { landingItems } from 'components/LandingPage/constants';
import Button from 'components/Button';

export default function LandingPage() {
  const navigate = useNavigate();

  const onNextPageButtonClick = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen">
      {landingItems.map((item) => (
        <img
          key={item.id}
          alt="landing"
          className="object-cover"
          src={item.imageSrc}
        />
      ))}
      <div className="bg-orange-50 px-5 py-14 text-heading-2 font-semibold">
        <p className="mb-8 text-center">
          무지개마을에 <br /> 편지를 보내보세요!
        </p>
        <Button
          disabled={false}
          id="service_start"
          onClick={onNextPageButtonClick}
        >
          무지개편지 둘러보기
        </Button>
      </div>
    </main>
  );
}
