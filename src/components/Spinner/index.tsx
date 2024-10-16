import SyncLoader from 'react-spinners/SyncLoader';

type Props = {
  className?: string;
};

export default function Spinner({ className }: Props) {
  const style = className || '';

  return (
    <main className={`${style} flex h-[88vh] items-center justify-center`}>
      <SyncLoader color="#FFB347" size="0.75rem" speedMultiplier={0.7} />
    </main>
  );
}
