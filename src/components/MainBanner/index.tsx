import { Link } from 'react-router-dom';

import chevronRightWithe from 'assets/chvron-right_white.svg';

type BannerProps = {
  category?: string;
  title?: string;
  description?: string;
  link: string;
  image: string;
  bgColor?: string;
  buttonContent?: string;
  cover?: boolean;
};

export default function Banner({
  category,
  title,
  description,
  link,
  image,
  bgColor,
  buttonContent,
  cover,
}: BannerProps) {
  return (
    <>
      {!cover ? (
        <Link
          className={`${bgColor} flex h-[268px] w-full justify-between pb-16 pl-[30px] pr-5 pt-[46px]`}
          target="_blank"
          to={link}
        >
          <div className="flex flex-col justify-between pb-2.5 text-left">
            <div>
              <p
                className={`${category ? 'mb-3 whitespace-pre-wrap text-sm font-light' : ''}`}
              >
                {category}
              </p>
              <p className="whitespace-pre-wrap text-heading-3 font-bold">
                {title}
              </p>
              <p className="whitespace-pre-wrap text-heading-3 font-light">
                {description}
              </p>
              {/* <p className="text-sm font-light whitespace-pre-wrap">
          {description}
        </p> */}
            </div>
            <div className="flex">
              <div className="flex items-center justify-between gap-x-1 rounded-full bg-orange-400 px-2.5 py-[5px] text-solo-small text-white">
                <p>{buttonContent}</p>
                <img alt="arrow" src={chevronRightWithe} />
              </div>
            </div>
          </div>
          <div className="flex size-[9.875rem] items-center justify-center">
            <img
              alt="card"
              className="size-full rounded-2xl object-cover"
              src={image}
            />
          </div>
        </Link>
      ) : (
        <Link
          className={`${bgColor} flex size-full justify-between`}
          target="_blank"
          to={link}
        >
          <div className="flex items-center justify-center">
            <img alt="card" className="object-fill" src={image} />
          </div>
        </Link>
      )}
    </>
  );
}
