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
    <Link to={url} key={id} target="_blank">
      <article
        id="content_read"
        className={`${className} flex cursor-pointer items-center justify-between bg-gray-6 px-6 py-3`}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-bold leading-[16px]">{title}</h3>
          <p className="text-[14px] leading-[14px]">{description}</p>
        </div>
        <div className="flex h-[3.25rem] w-[5.25rem] items-center justify-center">
          <img
            src={image}
            alt="analytics"
            className="size-full rounded-2xl object-fill"
          />
        </div>
      </article>
    </Link>
  );
}
