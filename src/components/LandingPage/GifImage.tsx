import React from 'react';

type Props = {
  src: string | undefined;
};

export default function GifImage({ src }: Props) {
  return (
    <img
      src={src}
      alt="write"
      className="absolute inset-x-0 bottom-14 left-1/2 transform -translate-x-1/2 w-full px-10"
    />
  );
}
