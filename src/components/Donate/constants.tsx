import CoffeeWithCake from 'assets/im_donate_coffee&cake.svg';
import Coffee from 'assets/im_donate_coffee.svg';

export const DONATE_DESCRIPTION_CONTENTS = [
  {
    ID: 1,
    CONTENT: [
      '안녕하세요 무지개가족 여러분!',
      <br key="1-1" />,
      '무지개편지팀 리더 이지영입니다.',
    ],
  },
  {
    ID: 2,
    CONTENT: [
      <br key="2-1" />,
      '7월 1일, 떨리는 마음으로 올린 부탁에',
      <br key="2-2" />,
      '많은 도움이 도착했습니다.',
    ],
  },
  {
    ID: 3,
    CONTENT: [
      <br key="3-1" />,
      '7월 1일부터 5일까지 ',
      <strong key="3-2">총 42명</strong>,
      '의 가족들이',
      <br key="3-3" />,
      '도와주셔서 ',
      <strong key="3-4">총 557,447원</strong>,
      '을 모금할 수 있었습니다.',
    ],
  },
  {
    ID: 4,
    CONTENT: [
      <br key="4-1" />,
      '무지개편지가 오래 운영되길 바라는 마음을',
      <br key="4-2" />,
      '보내주셔서 진심으로 감사합니다. ',
    ],
  },
  {
    ID: 5,
    CONTENT: [
      <br key="5-1" />,
      '저희도 무지개편지를 더 안정적으로',
      <br key="5-2" />,
      '운영할 수 있도록 최선을 다하겠습니다.',
    ],
  },
  {
    ID: 6,
    CONTENT: [
      <br key="6-1" />,
      '방법을 찾기 전까지 후원 계좌를 열어 두려 합니다.',
      <br key="6-2" />,
      '작은 도움이라도 주신다면 진심으로 감사하겠습니다.',
    ],
  },
];

export const DONATE_EXAMPLE_CONTENTS = [
  {
    id: 1,
    title: '커피&케이크 값',
    price: '7,000원',
    image: CoffeeWithCake,
  },
  {
    id: 2,
    title: '커피 1잔 값',
    price: '5,000원',
    image: Coffee,
  },
];

export const DONATE_USAGE_CONTENTS = [
  {
    id: 1,
    title: '서버 운영비',
    price: '월 40만원',
  },
  {
    id: 2,
    title: 'AI 이용비',
    price: '월 4.5만원',
  },
  {
    id: 3,
    title: '문자 발송비',
    price: '월 2만원',
  },
];
