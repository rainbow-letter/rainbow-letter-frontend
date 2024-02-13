import { useState, useEffect } from 'react';

export default function useInstallPromptCheck() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const clearPrompt = () => {
    setDeferredPrompt(null);
  };

  const InstallApp = () => {
    deferredPrompt?.prompt();

    deferredPrompt?.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'dismissed') {
        // TODO: 다신 안보이게 ?
      }

      setDeferredPrompt(null);
    });
  };

  return { deferredPrompt, clearPrompt, InstallApp };
}
