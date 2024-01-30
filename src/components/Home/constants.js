import analytics from '../../assets/Analytics Pie.svg';
import bookmark from '../../assets/Bookmark.svg';
import coffee from '../../assets/ph_coffee.svg';
import megaphone from '../../assets/Megaphone.svg';

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
    title: '공지사항',
    description: '새로운 사이트 이용 방법 안내',
    image: megaphone,
    url: 'https://blog.naver.com/rainbowletter/223331486755',
  },
  {
    id: 1,
    title: '따뜻한 조언',
    description: '무지개 마을을 그린 잔디 언니 인터뷰',
    image: coffee,
    url: 'https://blog.naver.com/rainbowletter/223324567774',
  },
  {
    id: 2,
    title: '전문가 인터뷰',
    description: '편지 쓰기가 정말 도움이 되나요?',
    image: bookmark,
    url: 'https://blog.naver.com/rainbowletter/223324381170',
  },
  {
    id: 3,
    title: '설문조사',
    description: '무지개 편지에 의견을 보내주세요!',
    image: analytics,
    url: 'https://forms.gle/bHsDq3XSqHsMuSh36',
  },
];
export const BANNER_MESSAGE = Object.freeze({
  title: '펫로스 증후군 상담 망설이고 있다면?',
  description: '무료 예술심리상담 참여자 모집 바로가기',
});
export const PHONE_MESSAGE = '자살예방 상담전화 109';
export const OPEN_TALK_MESSAGE = '오류 시 오픈카카오톡 문의하기';

export const FOOTER_MESSAGE = Object.freeze({
  ADDRESS: '문의 | rainbowletter41@gmail.com',
  COPYRIGHT: 'Copyright © 2023 무지개편지',
  COPYRIGHT_2: 'All Rights Reserved',
  EMAIL: 'https://blog.naver.com/rainbowletter',
});
