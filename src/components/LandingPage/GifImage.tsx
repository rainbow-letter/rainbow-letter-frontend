type Props = {
  src: string | undefined;
};

export default function GifImage({ src }: Props) {
  return (
    <video
      autoPlay
      className="absolute inset-x-0 bottom-12 left-1/2 w-full -translate-x-1/2 px-10"
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
