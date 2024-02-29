import React from 'react';

type Props = {
  image: any;
  className?: string;
};

export default function CoverImage({ image, className }: Props) {
  const style = className || '';

  return (
    <div className={`${style} w-full h-[22.125rem] absolute inset-x-0 top-0`}>
      <img
        src={image}
        alt="cover"
        loading="lazy"
        className="rounded-2xl w-full h-[22.125rem] object-cover"
      />
    </div>
  );
}
