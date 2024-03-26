import React from 'react';

import InstallPrompt from 'components/InstallPrompt';

export default function BottomContent() {
  return (
    <div>
      <h3 className="text-heading-3 text-center mb-5">
        바로가기 설치로 <br /> 무지개편지를 앱처럼 사용해보세요
      </h3>
      <InstallPrompt />
    </div>
  );
}
