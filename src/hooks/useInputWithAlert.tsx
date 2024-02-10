import { useState } from 'react';

const useInputWithAlert = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setIsChanged(!!value);
  };

  return {
    inputValue,
    isChanged,
    handleChange,
  };
};

export default useInputWithAlert;
