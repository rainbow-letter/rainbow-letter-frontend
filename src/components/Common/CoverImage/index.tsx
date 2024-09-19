type Props = {
  image: any;
  className?: string;
};

export default function CoverImage({ image, className }: Props) {
  const style = className || '';

  return (
    <div className={`${style} absolute inset-x-0 top-0 h-[22.125rem] w-full`}>
      <img
        src={image}
        alt="cover"
        className="h-[22.125rem] w-full rounded-2xl object-cover"
      />
    </div>
  );
}
