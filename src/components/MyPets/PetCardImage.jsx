import React from 'react';

function PetCardImage({ name, image }) {
  return (
    <figure className="w-full h-[354px] absolute inset-x-0 top-0">
      <img className="object-cover rounded-2xl" src={image.url} alt={name} />
    </figure>
  );
}

export default PetCardImage;
