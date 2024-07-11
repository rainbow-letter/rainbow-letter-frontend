import { Link } from 'react-router-dom';

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
    image?: string;
    url: string;
  };
  className?: string;
}

export default function ContentsItem({
  item: { id, title, description, image, url },
  className,
}: Props) {
  return (
    <Link key={id} target="_blank" to={url}>
      <article
        className={`${className} flex cursor-pointer items-center justify-between rounded-2xl px-5 py-2.5 shadow-home`}
        id="content_read"
      >
        <div className="flex flex-col">
          <h3 className="font-bold">{title}</h3>
          <p className="text-caption">{description}</p>
        </div>
        <div className="flex h-[3.25rem] w-[5.25rem] items-center justify-center">
          <img
            alt="analytics"
            className="size-full rounded-2xl object-fill"
            src={image}
          />
        </div>
      </article>
    </Link>
  );
}
