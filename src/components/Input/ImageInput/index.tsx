import { ChangeEvent, useState } from 'react';

import ImageDeleteButton from 'components/Input/ImageInput/ImageDeleteButton';
import thinPlus from '../../../assets/thinPlus.svg';

type Props = {
  className: string;
  imageSrc: string;
  deleteIcon: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
        onBlur={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        <label
          className={`${styles} flex size-[9.75rem] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#616161] bg-gray-2 text-white`}
          htmlFor="file-upload"
        >
          <img
            alt="Uploaded"
            className={`${imgStyles} rounded-2xl`}
            src={src}
          />
        </label>
        <input
          accept="image/*"
          className="hidden"
          id="file-upload"
          onChange={(e) => onChange(e)}
          type="file"
        />
        {imageSrc && (
          <ImageDeleteButton
            icon={deleteIcon}
            isHover={isHover}
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
