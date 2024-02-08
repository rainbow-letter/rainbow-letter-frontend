/* eslint-disable */
import React from 'react';

type Props = {
  src: string | undefined;
};

export default function GifImage({ src }: Props) {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute inset-x-0 bottom-12 left-1/2 transform -translate-x-1/2 w-full px-10"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
