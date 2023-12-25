import React from 'react';

import Chip from './Chip';

function Chips({ attributes }) {
  return (
    <div className="flex flex-wrap gap-3">
      {attributes.map((attribute) => (
        <Chip
          key={attribute.ID}
          value={attribute.NAME}
          onClick={() => {
            // TODO
          }}
        />
      ))}
    </div>
  );
}

export default Chips;
