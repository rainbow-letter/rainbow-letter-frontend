/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import thinPlus from '../../assets/thinPlus.svg';

function ImageInput({ className, imageSrc, onChange }) {
  const styles = className || '';
  const src = imageSrc || thinPlus;

  return (
    <>
      <label
        htmlFor="file-upload"
        className={`${styles} flex justify-center items-center w-[156px] h-[156px] bg-gray-2 text-white border border-[#616161] border-dashed rounded-2xl cursor-pointer`}
      >
        <img className="rounded-2xl" src={src} alt="Uploaded" />
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </>
  );
}

export default ImageInput;
