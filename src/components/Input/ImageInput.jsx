/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import thinPlus from '../../assets/thinPlus.svg';

function ImageInput({ className, onChange }) {
  const styles = className || '';

  return (
    <div className="p-[10px]">
      <label
        htmlFor="file-upload"
        className={`${styles} flex justify-center items-center w-[156px] h-[156px] bg-gray-2 text-white border border-[#616161] border-dashed rounded-2xl cursor-pointer`}
      >
        <img src={thinPlus} alt="thinPlus" />
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </div>
  );
}

export default ImageInput;
