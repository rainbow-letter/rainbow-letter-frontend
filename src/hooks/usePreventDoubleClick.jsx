/* eslint-disable no-alert */
import { useState } from 'react';

const usePreventDoubleClick = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = (submitAction) => async () => {
    setIsSubmitting(true);
    try {
      await submitAction();
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleButtonClick,
  };
};

export default usePreventDoubleClick;
