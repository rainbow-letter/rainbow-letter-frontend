import React from 'react';

import InstallPrompt from 'components/InstallPrompt';

export default function BottomContent() {
  return (
    <div>
      <h3 className="text-heading-3 text-center mb-5">
        홈 화면에 무지개편지 앱을 추가하고 <br /> 편하게 이용해보세요!
      </h3>
      <InstallPrompt />
    </div>
  );
}
