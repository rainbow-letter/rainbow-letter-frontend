import { ReactNode } from 'react';

type Props = {
  className: string;
  children: ReactNode;
};

export default function RadioGroup({ className, children }: Props) {
  const style = className || '';
  return <fieldset className={`${style}`}>{children}</fieldset>;
}
