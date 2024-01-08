import React from 'react';

function PetCardImage({ name, image }) {
  return (
    <figure className="absolute top-0 bg-gray-2 border border-gary-2 rounded-2xl">
      <img
        className="w-[354px] h-[354px] object-cover rounded-2xl"
        src={image.url}
        alt={name}
      />
    </figure>
  );
}

export default PetCardImage;
