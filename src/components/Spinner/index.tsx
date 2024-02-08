import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

export default function Spinner() {
  return (
    <main className="h-[88vh] flex justify-center items-center">
      <SyncLoader color="#FFB347" size="12px" speedMultiplier={0.7} />
    </main>
  );
}
