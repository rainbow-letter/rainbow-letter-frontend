import { useState } from 'react';

const usePreventDoubleClick = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = (submitAction) => () => {
    setIsSubmitting(true);
    submitAction();
  };

  return {
    isSubmitting,
    handleButtonClick,
  };
};

export default usePreventDoubleClick;
