import React, { Suspense, useState, useEffect } from 'react';
import { format } from 'date-fns';

import NoPets from 'components/MyPetsTemplate/NoPets';
import Spinner from 'components/Spinner';
import { PetResponse } from 'types/pets';
import { LetterListResponse } from 'types/letters';
import { getPets } from 'api/pets';

const PetInfoCard = React.lazy(
  () => import('components/LetterBox/PetInfoCard')
);
const WeekCalendar = React.lazy(
  () => import('components/LetterBox/WeekCalendar')
);
const LetterList = React.lazy(() => import('components/LetterBox/LetterList'));

export default function LetterBoxRenew() {
  const [letterList, setLetterList] = useState<LetterListResponse[]>([]);
  const [petsList, setPetsList] = useState<PetResponse[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetResponse | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const { data } = await getPets();

      setPetsList(data.pets || []);
      setSelectedPet(data.pets[0]);
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
          setDate={setDate}
          letterList={mappedLetterListByDate}
          setLetterList={setLetterList}
          selectedPet={selectedPet}
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
