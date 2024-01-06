import React from 'react';

function PetCardImage({ name, image }) {
  return (
    <figure className="absolute top-0 bg-gray-2 border border-gary-2 rounded-2xl">
      <img
        className="object-cover rounded-2xl"
        src={image.url}
        alt={name}
        width={354}
        height={354}
      />
    </figure>
  );
}

export default PetCardImage;
