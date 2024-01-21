import analytics from '../../assets/Analytics Pie.svg';
import bookmark from '../../assets/Bookmark.svg';
import coffee from '../../assets/ph_coffee.svg';

export const INFO_MESSAGES = Object.freeze({
  LOGIN_ABSENT: '앗, 로그인 하셔야 해요',
  INFOMATION_ABOUT_LETTER_WRITING_METHOD: '로그인하시면 편지를 보낼 수 있어요',
  PETS_ABSENT: '앗, 편지를 받을 아이가 없어요',
  SUGGEST_PETS_REGISTRATION: '우리 아이를 등록하러 가볼까요?',
  PHONE: '자살 예방 상담전화 109',
  PETS_TITLE: '우리 아이',
  CONTENTS_TITLE: '컨텐츠',
});

export const USER_ACTIONS = Object.freeze({
  LOGIN: '로그인하기',
  SIGH_UP: '가입하기',
  PEST_REGISTRATION: '등록하기',
});

export const CONTENTS_MESSAGE = [
  {
    id: 0,
    title: '설문조사',
    description_top_row: '무지개 편지에',
    description_bottom_line: '의견을 보내주세요!',
    image: analytics,
    url: 'https://forms.gle/bHsDq3XSqHsMuSh36',
  },
  {
    id: 1,
    title: '전문가 인터뷰',
    description_top_row: '편지 쓰기가',
    description_bottom_line: '정말 도움이 되나요?',
    image: bookmark,
    url: 'https://blog.naver.com/rainbowletter/223324381170',
  },
  {
    id: 2,
    title: '설문조사',
    description_top_row: '아이와의 마지막날로',
    description_bottom_line: '돌아간다면',
    image: analytics,
    url: 'https://forms.gle/6j2HfvdwjH66Scrh8',
  },
  {
    id: 3,
    title: '따뜻한 조언',
    description_top_row: '무지개마을 그림을',
    description_bottom_line: '그린 잔디 언니 이야기',
    image: coffee,
    url: 'https://blog.naver.com/rainbowletter/223324567774',
  },
];

export const FOOTER_MESSAGE = Object.freeze({
  ADDRESS: '문의 | rainbowletter41@gmail.com',
  COPYRIGHT: 'Copyright © 2023 무지개편지',
  COPYRIGHT_2: 'All Rights Reserved',
  EMAIL: 'https://blog.naver.com/rainbowletter',
});
