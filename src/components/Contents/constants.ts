import Survey from '../../assets/contents_2.jpg';
import Dogs from '../../assets/im_contents_dogs.webp';
import Cat from '../../assets/im_contents_cat.webp';

interface Content_Message {
  id: number;
  title: string;
  description: string;
  image?: string;
  url: string;
}

export const PET_CONTENTS_MESSAGE = [
  {
    id: 0,
    title: [
      {
        id: 0,
        contents: '무지개마을에서',
      },
      {
        id: 1,
        contents: '우리 아이는?',
      },
    ],
    description: '강아지 유형 테스트 하러 가기',
    image: Dogs,
    url: 'https://smore.im/quiz/IEiAubtaOQ',
  },
  {
    id: 1,
    title: [
      {
        id: 0,
        contents: '지금 내 마음을',
      },
      {
        id: 1,
        contents: '알아야 할 때',
      },
    ],
    description: '펫로스 증후군 검사하기',
    image: Cat,
    url: 'https://smore.im/quiz/2re7a9XMt2',
  },
];

export const CONTENTS_MESSAGE: Content_Message[] = [
  {
    id: 0,
    title: '고객 만족도 조사',
    description: '무지개 편지에 의견을 보내주세요!',
    image: Survey,
    url: 'https://forms.gle/bHsDq3XSqHsMuSh36',
  },
];
