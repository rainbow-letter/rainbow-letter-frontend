import React from 'react';
import { useNavigate } from 'react-router-dom';

import rainbow from 'assets/rainbow_28*39.svg';

function PWAGuide() {
  const navigate = useNavigate();

  return (
    <section>
      <button
        type="button"
        className="w-full flex justify-center items-center gap-x-1 py-1.5 bg-gray-2"
        onClick={() => navigate('/landing')}
      >
        <div>
          <img src={rainbow} alt="logo" />
        </div>
        <div>
          <p className="text-solo-small font-normal">
            무지개편지를 앱처럼 사용해보세요!
          </p>
        </div>
      </button>
    </section>
  );
}

export default PWAGuide;
