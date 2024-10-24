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
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseOver={() => setIsHover(true)}
      onFocus={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onBlur={() => setIsHover(false)}
    >
      <label
        htmlFor="file-upload"
        className={`${styles} flex size-[9.75rem] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#616161] bg-gray-2 text-white`}
      >
        <img className={`${imgStyles} rounded-2xl`} src={src} alt="Uploaded" />
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
  );
}

export default ImageInput;
