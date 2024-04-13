type LetterType = 'letter' | 'reply';

export type ShowcaseLetter = {
  id: string;
  type: LetterType;
  petName: string;
  content: string;
};
