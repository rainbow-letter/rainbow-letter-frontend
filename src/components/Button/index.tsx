import { ReactNode } from 'react';

type Props = {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  // AccountDeletionConfirmationModal 컴포넌트에 쓰이는 버튼에 따라 onClick 선택/필수 바꾸기
  onClick?: () => void;
  id?: any;
};

function Button({ className, disabled, children, onClick, id }: Props) {
  const styles = className || '';
  const disabledStyles = disabled
    ? 'bg-gray-1 text-gray-1'
    : 'bg-orange-400 text-white';

  return (
    <button
      className={`${styles} ${disabledStyles} h-[4.375rem] w-full rounded-2xl text-heading-3 font-semibold`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
