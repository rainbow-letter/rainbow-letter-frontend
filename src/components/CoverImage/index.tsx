import React from 'react';

type Props = {
  image: string | null;
  className?: string;
};

export default function CoverImage({ image, className }: Props) {
  const style = className || '';
  const timestamp = new Date().getTime();
  const imageWithTimestamp = image?.includes('?')
    ? `${image}&v=${timestamp}`
    : `${image}?v=${timestamp}`;

  return (
    <div className={`${style} w-full h-[22.125rem] absolute inset-x-0 top-0`}>
      <img
        src={imageWithTimestamp}
        alt="cover"
        crossOrigin="anonymous"
        loading="lazy"
        className="rounded-2xl w-full h-[22.125rem] object-cover"
      />
    </div>
  );
}
