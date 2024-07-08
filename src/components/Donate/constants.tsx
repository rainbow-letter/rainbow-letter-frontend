import React from 'react';

import CoffeeWithCake from 'assets/im_donate_coffee&cake.svg';
import Coffee from 'assets/im_donate_coffee.svg';

export const DONATE_DESCRIPTION_CONTENTS = [
  {
    ID: 1,
    CONTENT: [
      '안녕하세요 무지개가족 여러분!',
      <br />,
      '무지개편지팀 리더 이지영입니다.',
    ],
  },
  {
    ID: 2,
    CONTENT: [
      <br />,
      <strong>무지개편지가 월 50만원의 운영비가 없어</strong>,
      <br />,
      <strong>운영을 지속하기 어려운 상황입니다.</strong>,
      <br />,
      <strong>가족 여러분의 도움이 필요해요.</strong>,
    ],
  },
  {
    ID: 3,
    CONTENT: [
      <br />,
      '최근 누적 편지 개수가 6,000개가 넘고,',
      <br />,
      '가입자 수가 늘면서 서버 운영 비용이',
      <br />,
      '이전보다 크게 발생하였습니다.',
    ],
  },
  {
    ID: 4,
    CONTENT: [
      <br />,
      '무지개편지는 직장인들이 운영하고 있습니다.',
      <br />,
      '그동안은 십시일반으로 돈을 모았지만,',
      <br />,
      '이제는 어려운 상황입니다.',
    ],
  },
  {
    ID: 5,
    CONTENT: [
      <br />,
      '후원하기를 통해 도와주시면',
      <br />,
      '무지개편지를 더 안정적으로',
      <br />,
      '운영할 수 있는 방법을 고민하겠습니다.',
    ],
  },
  {
    ID: 6,
    CONTENT: [
      <br />,
      '무지개편지를 지키는 데에',
      <br />,
      '많은 도움 부탁드립니다.',
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
