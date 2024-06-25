import { ChangeEvent } from 'react';

const INPUT_STYLE =
  'w-full rounded-2xl py-[1.125rem] px-5 bg-gray-2 text-solo-small mb-3';

type Props = {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isNotValid: boolean | null | undefined;
  errorMessage: boolean | string | null | undefined;
  id?: string;
  className?: string;
};

export default function UserInput({
  isNotValid,
  errorMessage,
  className,
  ...props
}: Props) {
  const style = className || '';

  return (
    <>
      <input
        {...props}
        className={`${style} ${
          isNotValid
            ? `${INPUT_STYLE} border border-alarm-red`
            : `${INPUT_STYLE}`
        }`}
      />
      {isNotValid && errorMessage && (
        <p className="px-2.5 pb-2 text-left text-caption text-alarm-red">
          {errorMessage}
        </p>
      )}
    </>
  );
}
