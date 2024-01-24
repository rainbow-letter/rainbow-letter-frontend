import React from 'react';

function Divider({ className }) {
  return (
    <hr className={`border-t border-b-[#EEE] w-[354px] mx-auto ${className}`} />
  );
}

export default Divider;
