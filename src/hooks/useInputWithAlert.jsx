import { useState } from 'react';

const useInputWithAlert = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;

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
