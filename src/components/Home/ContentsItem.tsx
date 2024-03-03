import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENTS_MESSAGE } from 'components/Home/constants';

export default function ContentsItem() {
  return (
    <>
      {CONTENTS_MESSAGE.map((contents) => (
        <Link to={contents.url} key={contents.id} target="_blank">
          <article
            id="content_read"
            className="flex justify-between items-center py-[0.625rem] px-5 rounded-2xl cursor-pointer shadow-home"
          >
            <div className="flex flex-col">
              <h3 className="text-gray-1 font-bold">{contents.title}</h3>
              <p className="text-caption">{contents.description}</p>
            </div>
            <div className="w-[5.25rem] h-[3.25rem] flex justify-center items-center">
              <img
                src={contents.image}
                alt="analytics"
                className="rounded-2xl"
              />
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
