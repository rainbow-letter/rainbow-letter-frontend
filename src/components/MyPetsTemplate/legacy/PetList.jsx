import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NoPets from 'components/MyPetsTemplate/NoPets';
import PetCard from './PetCard';

function PetList() {
  const { state } = useLocation();
  const ref = useRef([]);
  const { pets } = useSelector((state) => state.pet);

  useEffect(() => {
    if (state) {
      ref.current[state]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [pets]);

  if (!pets || pets?.length <= 0) return <NoPets />;
  return (
    <ul className="px-1">
      {pets?.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          ref={(el) => {
            ref.current[pet.id] = el;
          }}
        />
      ))}
    </ul>
  );
}

export default PetList;
