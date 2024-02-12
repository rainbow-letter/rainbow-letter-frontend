import React, { Suspense } from 'react';
import Spinner from 'components/Spinner';

const MyPetsTemplate = React.lazy(() => import('components/MyPetsTemplate'));

function MyPets() {
  return (
    <Suspense fallback={<Spinner />}>
      <MyPetsTemplate />
    </Suspense>
  );
}

export default MyPets;
