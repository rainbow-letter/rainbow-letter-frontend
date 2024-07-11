import { Suspense, lazy, useState } from 'react';

import Spinner from 'components/Spinner';

const NameSection = lazy(() => import('components/LetterBox/NameSection'));
const LetterListSection = lazy(
  () => import('components/LetterBox/LetterListSection')
);

const DEFAULT = '전체';

export default function LetterBox() {
  const [selectedPet, setSelectedPet] = useState(DEFAULT);

  return (
    <Suspense fallback={<Spinner />}>
      <main>
        <NameSection onChange={setSelectedPet} selectedPet={selectedPet} />
        <LetterListSection pet={selectedPet} />
      </main>
    </Suspense>
  );
}
