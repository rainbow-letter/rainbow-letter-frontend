import React from 'react';

function PetRegistrationSection({ title, subTitle, children }) {
  return (
    <section className="mb-4">
      <div className="py-2.5 solo-medium font-semibold">
        <span>{title}</span>
        <span className="text-gray-2 ml-2">{subTitle}</span>
      </div>
      {children}
    </section>
  );
}

export default PetRegistrationSection;
