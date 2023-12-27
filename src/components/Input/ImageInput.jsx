/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import thinPlus from '../../assets/thinPlus.svg';

function ImageInput({ className, imageSrc, onChange }) {
  const src = imageSrc || thinPlus;
  const styles = className || '';
  const imgStyles = imageSrc ? 'w-full h-full object-cover' : '';

  return (
    <>
      <label
        htmlFor="file-upload"
        className={`${styles} flex justify-center items-center w-[156px] h-[156px] bg-gray-2 text-white border border-[#616161] border-dashed rounded-2xl overflow-hidden cursor-pointer`}
      >
        <img className={`${imgStyles} rounded-2xl`} src={src} alt="Uploaded" />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
    </>
  );
}

export default ImageInput;
