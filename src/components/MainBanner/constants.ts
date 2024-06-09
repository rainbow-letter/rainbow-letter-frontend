/* eslint-disable import/prefer-default-export */
import bannerLetter from 'assets/banner-letter.svg';
// import bannerGripTalk from 'assets/banner-grip-talk.svg';
// import bannerCreateLetter from 'assets/banner-createLetter.png';
// import bannerFitaPat from 'assets/ad_fitapat_4.svg';
import bannerFitaPat from 'assets/ad_fitapat_4.png';
import bannerSavedImage from 'assets/banner_save.png';
import mainBanner from 'assets/main-banner.svg';

export const BANNER_ITEMS = [
  // {
  //   id: 0,
  //   category: 'EVENT',
  //   title: `무지개 마을\n케이스&그립톡\n사전 예약 중`,
  //   description: '',
  //   link: 'https://forms.gle/zdHQD2gq3EUZtHJZ9',
  //   image: bannerGripTalk,
  //   buttonContent: '사전 예약하기',
  //   bgColor: 'bg-[#F9F9F9]',
  // },
  {
    id: 0,
    category: 'EVENT',
    title: `무지개 마을\n케이스&그립톡\n사전 예약 중`,
    description: '',
    link: 'https://smartstore.naver.com/rainbowletter/products/10422885853',
    image: mainBanner,
    buttonContent: '사전 예약하기',
    bgColor: 'bg-[#F9F9F9]',
    cover: true,
  },
  {
    id: 1,
    category: 'EVENT',
    title: `무지개 마을\n케이스&그립톡\n사전 예약 중`,
    description: '',
    link: 'https://www.fitapat.com/product/case/91',
    image: bannerFitaPat,
    buttonContent: '사전 예약하기',
    bgColor: 'bg-[#F9F9F9]',
    cover: true,
  },
  {
    id: 2,
    category: 'EVENT',
    title: `무지개 마을\n케이스&그립톡\n사전 예약 중`,
    description: '',
    link: 'https://blog.naver.com/rainbowletter/223461370330',
    image: bannerSavedImage,
    buttonContent: '사전 예약하기',
    bgColor: 'bg-[#F9F9F9]',
    cover: true,
  },
  {
    id: 3,
    title: `무지개 너머\n답장을 받아보세요`,
    description: '마음껏, 무료로',
    link: '/landing',
    image: bannerLetter,
    buttonContent: '자세히 보기',
    bgColor: 'bg-[#FFF8ED]',
  },
  // {
  //   id: 2,
  //   title: '아이를 어떻게\n추모하고 있나요?',
  //   description: '여러분의 경험담을\n모으고 있어요',
  //   link: 'https://moaform.com/q/ZaL0AH',
  //   image: bannerRemembrance,
  //   buttonContent: '설문조사 바로가기',
  //   bgColor: 'bg-[#F8F8F8]',
  // },
  // {
  //   id: 3,
  //   title: '나는 펫로스\n증후군일까?',
  //   description: '심리상담이 필요한지\n궁금하다면',
  //   link: 'https://smore.im/quiz/2re7a9XMt2',
  //   image: bannerPetLoss,
  //   buttonContent: '테스트하기',
  //   bgColor: 'bg-[#FFF1EB]',
  // },
  // {
  //   id: 4,
  //   title: '편지를 예쁘게\n만들어드려요',
  //   description: '문장과 사진을 보내면\n1분만에 신청 완료!',
  //   link: 'https://walla.my/rainbowletterimage',
  //   image: bannerCreateLetter,
  //   buttonContent: '설문조사 바로가기',
  //   bgColor: 'bg-[#FFF8ED]',
  // },
];
