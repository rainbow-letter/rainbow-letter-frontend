type LetterType = 'letter' | 'reply';

export type SampleLetter = {
  id: string;
  type: LetterType;
  petName: string;
  content: string;
};
