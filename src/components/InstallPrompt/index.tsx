import React from 'react';

import Button from 'components/Button';
import useInstallPrompt from 'hooks/useInstallPrompt';
import { postData } from 'api/data';

function InstallPrompt() {
  const { deferredPrompt, InstallApp } = useInstallPrompt();

  const onInstallButtonClick = async () => {
    try {
      InstallApp();
      await postData({ event: 'pwa' });
    } catch (error) {
      console.log(error);
    }
  };

  return deferredPrompt ? (
    <Button onClick={onInstallButtonClick}>바로가기 설치하기</Button>
  ) : null;
}

export default InstallPrompt;
