/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';

import ImageDeleteButton from 'components/Input/ImageInput/ImageDeleteButton';
import thinPlus from '../../../assets/thinPlus.svg';

type Props = {
  className: string;
  imageSrc: string;
  deleteIcon: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

function ImageInput({
  className,
  imageSrc,
  deleteIcon,
  onChange,
  onDelete,
}: Props) {
  const src = imageSrc || thinPlus;
  const styles = className || '';
  const imgStyles = imageSrc ? 'w-full h-full object-cover' : '';
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <>
      <div
        className="relative inline-block"
        onMouseOver={() => setIsHover(true)}
        onFocus={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onBlur={() => setIsHover(false)}
      >
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
          onChange={(e) => onChange(e)}
        />
        {imageSrc && (
          <ImageDeleteButton
            isHover={isHover}
            icon={deleteIcon}
            onDelete={onDelete}
          />
        )}
      </div>
      {/* <style jsx>{`
        .relative:hover button {
          display: block;
        }
      `}</style> */}
    </>
  );
}

export default ImageInput;
