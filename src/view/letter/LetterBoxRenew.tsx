import React, { Suspense, useState } from 'react';

import Spinner from 'components/Spinner';
import { Pets } from 'types/pets';

const PetInfoCard = React.lazy(
  () => import('components/LetterBox/PetInfoCard')
);

export default function LetterBoxRenew() {
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null);

  return (
    <Suspense fallback={<Spinner />}>
      <main className="relative">
        <PetInfoCard selectedPet={selectedPet} onChange={setSelectedPet} />
      </main>
    </Suspense>
  );
}
