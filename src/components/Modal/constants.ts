import Kakao from 'assets/im_modal_kakao.png';
import FitaPat from 'assets/im_modal_fitapat.png';
import forest from 'assets/forest.svg';
import woman from 'assets/im_donate_woman.svg';

export interface Modal {
  type: string;
  title: string;
  body: {
    id: number;
    prefix?: string;
    contents: string;
  }[];
}

export interface Modal_AD {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  className?: string;
}

export const MODAL_AD_CONTENTS_ITEMS: Modal_AD[] = [
  {
    id: 1,
    title: '무지개편지 카톡채널 OPEN',
    description: '답장 링크 카톡으로 받기',
    image: Kakao,
    url: 'https://pf.kakao.com/_MNevG/105645061',
  },
];

export const MODAL_MESSAGE: Modal[] = [
  {
    type: 'TOPIC',
    title: '이런 주제로도 써보세요',
    body: [
      {
        id: 1,
        prefix: 'Q. ',
        contents: '오늘은 어떤 하루였나요?',
      },
      {
        id: 2,
        prefix: 'Q. ',
        contents: '내일은 무엇을 하며 보낼건가요?',
      },
      {
        id: 3,
        prefix: 'Q. ',
        contents: '최근 아이의 응원이 필요한 일이 있나요?',
      },
    ],
  },
  {
    type: 'PHONE',
    title: '카톡으로 답장 알림을 받아보세요',
    body: [
      {
        id: 1,
        contents: '핸드폰번호를 등록하면',
      },
      {
        id: 2,
        contents: '답장 링크를 카톡으로 보내드려요',
      },
    ],
  },
  {
    type: 'COMPLETE',
    title: '편지가 출발했어요',
    body: [
      {
        id: 1,
        contents: '답장은 다음날 오전 10시에 도착해요',
      },
    ],
  },
  {
    type: 'EXIST',
    title: `작성중인 편지가 있어요`,
    body: [
      {
        id: 1,
        contents: '여기서 계속 작성할까요?',
      },
    ],
  },
  {
    type: 'SAVING',
    title: `다른 환경에서\n편지를 작성중이예요`,
    body: [
      {
        id: 1,
        contents: '여기서 계속 작성할까요?',
      },
    ],
  },
  {
    type: 'IMAGE',
    title: `어떤 편지를 저장하시겠어요?`,
    body: [
      {
        id: 1,
        contents: '이미지로 저장하시고 싶은 편지를 선택해주세요',
      },
    ],
  },
  {
    type: 'SAVECOMPLETE',
    title: `편지가 갤러리에 저장되었어요`,
    body: [],
  },
];

export default MODAL_MESSAGE;
