import React from 'react';

type Props = {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  id?: any;
};

function Button({ className, disabled, children, onClick, id }: Props) {
  const styles = className || '';
  const disabledStyles = disabled
    ? 'bg-gray-1 text-gray-1'
    : 'bg-orange-400 text-white';

  return (
    <button
      id={id}
      className={`${styles} ${disabledStyles} w-full h-[70px] text-heading-3 font-semibold rounded-2xl`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
