import React, { Suspense, useState, useEffect } from 'react';
import { format } from 'date-fns';

import Spinner from 'components/Spinner';
import { Pets } from 'types/pets';
import { getLetters } from 'api/letter';
import { Letters } from 'types/letters';

const PetInfoCard = React.lazy(
  () => import('components/LetterBox/PetInfoCard')
);
const WeekCalendar = React.lazy(
  () => import('components/LetterBox/WeekCalendar')
);
const LetterList = React.lazy(() => import('components/LetterBox/LetterList'));

export default function LetterBoxRenew() {
  const [letterList, setLetterList] = useState<Letters[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const { letters } = await getLetters();

      setLetterList(letters || []);
    })();
  }, []);

  const mappedLetterListByDate = letterList.map((letter) =>
    format(letter.createdAt, 'yyyy-MM-dd')
  );

  return (
    <Suspense fallback={<Spinner />}>
      <main className="relative">
        <PetInfoCard selectedPet={selectedPet} onChange={setSelectedPet} />
        <WeekCalendar
          date={date}
          setDate={setDate}
          letterList={mappedLetterListByDate}
        />
        <LetterList
          date={date}
          selectedPet={selectedPet}
          letterList={letterList}
        />
      </main>
    </Suspense>
  );
}
