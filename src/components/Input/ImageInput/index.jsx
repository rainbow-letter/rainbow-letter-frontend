/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React from 'react';

import ImageDeleteButton from './ImageDeleteButton';
import thinPlus from '../../../assets/thinPlus.svg';

function ImageInput({ className, imageSrc, deleteIcon, onChange, onDelete }) {
  const src = imageSrc || thinPlus;
  const styles = className || '';
  const imgStyles = imageSrc ? 'w-full h-full object-cover' : '';

  return (
    <>
      <div className="relative inline-block">
        <label
          htmlFor="file-upload"
          className={`${styles} flex justify-center items-center w-[156px] h-[156px] bg-gray-2 text-white border border-[#616161] border-dashed rounded-2xl overflow-hidden cursor-pointer`}
        >
          <img
            className={`${imgStyles} rounded-2xl`}
            src={src}
            alt="Uploaded"
          />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
        {imageSrc && (
          <ImageDeleteButton icon={deleteIcon} onDelete={onDelete} />
        )}
      </div>
      <style jsx>{`
        .relative:hover button {
          display: block;
        }
      `}</style>
    </>
  );
}

export default ImageInput;
