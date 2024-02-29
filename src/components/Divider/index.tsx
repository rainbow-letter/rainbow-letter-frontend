import React from 'react';

type Props = {
  className?: string;
};

function Divider({ className }: Props) {
  return (
    <hr
      className={`border-t border-b-[#EEE] w-[22.125rem] mx-auto ${className}`}
    />
  );
}

export default Divider;
