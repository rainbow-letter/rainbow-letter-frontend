import React from 'react';

import defaultImage from '../../assets/Logo_256px.png';

function PetCardImage({ name, image }) {
  const displayedImageUrl = image.url || defaultImage;

  return (
    <figure className="w-full h-[354px] absolute inset-x-0 top-0">
      <img
        className="h-full w-full object-cover rounded-2xl border border-gray-2"
        src={displayedImageUrl}
        alt={name}
      />
    </figure>
  );
}

export default PetCardImage;
