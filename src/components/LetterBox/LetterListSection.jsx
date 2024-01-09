import React from 'react';
import { Link } from 'react-router-dom';

import NoLetters from './NoLetters';
import LetterItems from './LetterItems';

export default function LetterListSection({ letters }) {
  if (letters.length < 1) return <NoLetters />;

  return (
    <section className="mt-6">
      <ul>
        {letters &&
          letters.map((letter) => (
            <Link to={`/letter-box/${letter.id}`} key={letter.id}>
              <LetterItems key={letter.id} letter={letter} />
            </Link>
          ))}
      </ul>
    </section>
  );
}
