import React, { Suspense, useState } from 'react';

import Spinner from 'components/Spinner';
import { Pets } from 'types/pets';

const PetInfoCard = React.lazy(
  () => import('components/LetterBox/PetInfoCard')
);
const WeekCalendar = React.lazy(
  () => import('components/LetterBox/WeekCalendar')
);
const LetterList = React.lazy(() => import('components/LetterBox/LetterList'));

export default function LetterBoxRenew() {
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null);
  const [date, setDate] = useState(new Date());

  return (
    <Suspense fallback={<Spinner />}>
      <main className="relative">
        <PetInfoCard selectedPet={selectedPet} onChange={setSelectedPet} />
        <WeekCalendar date={date} setDate={setDate} />
        <LetterList date={date} />
      </main>
    </Suspense>
  );
}
