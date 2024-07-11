type Props = {
  image: string | null;
  className?: string;
};

export default function CoverImage({ image, className }: Props) {
  const style = className || '';
  const timestamp = new Date().getTime();
  const imageWithTimestamp = image?.includes('?')
    ? `${image}&v=${timestamp}`
    : `${image}?v=${timestamp}`;

  return (
    <div className={`${style} absolute inset-x-0 top-0 h-[22.125rem] w-full`}>
      <img
        alt="cover"
        className="h-[22.125rem] w-full rounded-2xl object-cover"
        crossOrigin="anonymous"
        loading="lazy"
        src={imageWithTimestamp}
      />
    </div>
  );
}
