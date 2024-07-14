import { useEffect, useState, ChangeEvent } from 'react';

const useInputWithAlert = ({ initialValue = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setInputValue(value);
    setIsChanged(!!value);
  };

  useEffect(() => {
    if (initialValue) setInputValue(initialValue);
  }, [initialValue]);

  return {
    inputValue,
    isChanged,
    handleChange,
  };
};

export default useInputWithAlert;
