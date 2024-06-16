import React from 'react';
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
        className={`${className} flex justify-between items-center py-[0.625rem] px-5 rounded-2xl cursor-pointer shadow-home`}
      >
        <div className="flex flex-col">
          <h3 className="font-bold">{title}</h3>
          <p className="text-caption">{description}</p>
        </div>
        <div className="w-[5.25rem] h-[3.25rem] flex justify-center items-center">
          <img
            src={image}
            alt="analytics"
            className="rounded-2xl w-full h-full object-fill"
          />
        </div>
      </article>
    </Link>
  );
}
