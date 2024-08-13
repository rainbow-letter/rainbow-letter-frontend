import React, { Suspense, useState, useEffect } from 'react';
import { format } from 'date-fns';

import NoPets from 'components/MyPetsTemplate/NoPets';
import Spinner from 'components/Spinner';
import { PetResponse } from 'types/pets';
import { Letters } from 'types/letters';
import { getPets } from 'api/pets';
import { getLetters } from 'api/letter';

const PetInfoCard = React.lazy(
  () => import('components/LetterBox/PetInfoCard')
);
const WeekCalendar = React.lazy(
  () => import('components/LetterBox/WeekCalendar')
);
const LetterList = React.lazy(() => import('components/LetterBox/LetterList'));

export default function LetterBoxRenew() {
  const [letterList, setLetterList] = useState<Letters[]>([]);
  const [petsList, setPetsList] = useState<PetResponse[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetResponse | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const { letters } = await getLetters();
      const { data } = await getPets();

      setPetsList(data.pets || []);
      setLetterList(letters || []);
    })();
  }, []);

  const mappedLetterListByDate = letterList.map((letter) =>
    format(letter.createdAt, 'yyyy-MM-dd')
  );

  if (petsList !== null && petsList.length < 1) return <NoPets />;

  return (
    <Suspense fallback={<Spinner />}>
      <main className="relative">
        <PetInfoCard
          petsList={petsList}
          selectedPet={selectedPet}
          onChange={setSelectedPet}
        />
        <WeekCalendar
          selectedDate={date}
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
