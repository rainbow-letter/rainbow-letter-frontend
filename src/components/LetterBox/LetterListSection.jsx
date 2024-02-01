/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NoLetters from './NoLetters';
import LetterItems from './LetterItems';
import { getLetters } from '../../api/letter';

const DEFAULT = '전체';

export default function LetterListSection({ pet }) {
  const [letterList, setLetterList] = useState([]);

  useEffect(() => {
    (async () => {
      const { letters } = await getLetters();
      setLetterList(letters || []);
    })();
  }, []);

  const filteredLetter =
    pet === DEFAULT
      ? letterList
      : letterList.filter((letter) => letter.petName === pet);

  if (filteredLetter.length < 1) return <NoLetters pet={pet} />;

  return (
    <section className="mt-6">
      <ul>
        {filteredLetter &&
          filteredLetter.map((letter) => (
            <Link to={`/letter-box/${letter.id}`} key={letter.id}>
              <LetterItems key={letter.id} letter={letter} />
            </Link>
          ))}
      </ul>
    </section>
  );
}
