import React from 'react';

import Button from 'components/Button';
import useInstallPrompt from 'hooks/useInstallPrompt';

function InstallPrompt() {
  const { deferredPrompt, InstallApp } = useInstallPrompt();

  return deferredPrompt ? (
    <Button onClick={InstallApp}>설치없이 앱으로 보기</Button>
  ) : null;
}

export default InstallPrompt;
