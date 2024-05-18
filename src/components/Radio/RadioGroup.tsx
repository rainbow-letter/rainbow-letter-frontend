import React from 'react';

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function RadioGroup({ className, children }: Props) {
  const style = className || '';
  return <fieldset className={`${style}`}>{children}</fieldset>;
}
