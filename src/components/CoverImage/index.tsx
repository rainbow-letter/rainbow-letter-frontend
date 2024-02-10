import React from 'react';

type Props = {
  image: string;
  className?: string;
};

export default function CoverImage({ image, className }: Props) {
  const style = className || '';

  return (
    <div className={`${style} w-full h-[354px] absolute inset-x-0 top-0`}>
      <img
        src={image}
        alt="cover"
        loading="lazy"
        className="rounded-[15px] w-full h-[354px] object-cover"
      />
    </div>
  );
}
