import Letter from '../../assets/contents_3.png';
import Survey from '../../assets/contents_2.jpg';
import contentsBackground from '../../assets/backgroundImage.png';

interface Content_Message {
  id: number;
  title: string;
  description: string;
  image?: string;
  url: string;
}

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

export const CONTENTS_MESSAGE: Content_Message[] = [
  {
    id: 0,
    title: '고객 만족도 조사',
    description: '무지개 편지에 의견을 보내주세요!',
    image: Survey,
    url: 'https://forms.gle/bHsDq3XSqHsMuSh36',
  },
  {
    id: 1,
    title: '편지 쓰기가 도움이 되나요?',
    description: '펫로스 상담사 인터뷰',
    image: Letter,
    url: 'https://blog.naver.com/rainbowletter/223324381170',
  },
  {
    id: 2,
    title: '잔디 언니의 따듯한 조언',
    description: '무지개마을 그림을 그린 이야기',
    image: contentsBackground,
    url: 'https://blog.naver.com/rainbowletter/223324567774',
  },
];
export const BANNER_MESSAGE = Object.freeze({
  title: '무지개마을에서 우리 강아지는',
  description: '강아지 유형 테스트 하러 가기',
});
export const PHONE_MESSAGE = '자살예방 상담전화 109';
export const OPEN_TALK_MESSAGE = '오류 시 오픈카카오톡 문의하기';

export const FOOTER_MESSAGE = Object.freeze({
  ADDRESS: '문의 | rainbowletter41@gmail.com',
  COPYRIGHT: 'Copyright © 2023 무지개편지',
  COPYRIGHT_2: 'All Rights Reserved',
  EMAIL: 'https://blog.naver.com/rainbowletter',
});
