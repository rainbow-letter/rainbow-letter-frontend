import React from 'react';

// eslint-disable-next-line import/extensions
import LetterItem from './LetterItem';

type LetterType = 'letter' | 'reply';

export type SampleLetter = {
  id: string;
  type: LetterType;
  petName: string;
  content: string;
};

const SAMPLE_LETTERS: SampleLetter[] = [
  {
    id: '1',
    type: 'letter',
    petName: '코코',
    content: `코코야 엄마가\n항상 사랑해\n다음에도 내\n아들이 되어줘`,
  },
  {
    id: '2',
    type: 'reply',
    petName: '우주',
    content:
      '내가 보고 싶을 때\n밤하늘을 봐줘\n별이 되어 누나를\n지켜보고 있으니까!',
  },
  {
    id: '3',
    type: 'reply',
    petName: '보리',
    content: '엄마를 만난 건\n내 인생 최고\n행운이야!\n사랑해!',
  },
  {
    id: '4',
    type: 'letter',
    petName: '무지',
    content:
      '너가 있어서 나는\n힘든 시간을 견딜 수\n있었어. 널 만난 걸\n절대 후회하지 않아.',
  },
];

function LetterShowcase() {
  return (
    <section className="pt-8 pl-6">
      <span className="py-5 text-solo-large font-bold">무지개에 걸린 편지</span>
      <div className="flex py-5 gap-x-2.5 overflow-auto">
        {SAMPLE_LETTERS.map((letter) => (
          <LetterItem key={letter.id} letter={letter} />
        ))}
      </div>
    </section>
  );
}

export default LetterShowcase;
