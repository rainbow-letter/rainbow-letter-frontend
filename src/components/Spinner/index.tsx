import SyncLoader from 'react-spinners/SyncLoader';

export default function Spinner() {
  return (
    <main className="flex h-[88vh] items-center justify-center">
      <SyncLoader color="#FFB347" size="0.75rem" speedMultiplier={0.7} />
    </main>
  );
}
