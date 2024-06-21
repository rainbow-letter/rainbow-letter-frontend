import React from 'react';

function PetRegistrationSection({ title, subTitle, children }) {
  return (
    <section>
      <div className="solo-medium py-2.5 font-semibold">
        <span>{title}</span>
        <span className="ml-2 text-gray-2">{subTitle}</span>
      </div>
      {children}
    </section>
  );
}

export default PetRegistrationSection;
