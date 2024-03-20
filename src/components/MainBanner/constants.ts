/* eslint-disable import/prefer-default-export */
import bannerLetter from 'assets/banner-letter.svg';
import bannerRemembrance from 'assets/banner-remembrance.svg';
import bannerPetLoss from 'assets/banner-petLoss.svg';
import bannerCreateLetter from 'assets/banner-createLetter.png';

export const BANNER_ITEMS = [
  {
    title: `무지개 너머\n답장을 받아보세요`,
    description: '마음껏, 무료로',
    link: 'https://blog.naver.com/rainbowletter/223383201675',
    image: bannerLetter,
    buttonContent: '자세히 보기',
    bgColor: 'bg-[#FFF8ED]',
  },
  {
    title: '아이를 어떻게\n추모하고 있나요?',
    description: '여러분의 경험담을\n모으고 있어요',
    link: 'https://moaform.com/q/ZaL0AH',
    image: bannerRemembrance,
    buttonContent: '설문조사 바로가기',
    bgColor: 'bg-[#F8F8F8]',
  },
  {
    title: '나는 펫로스\n증후군일까?',
    description: '심리상담이 필요한지\n궁금하다면',
    link: 'https://smore.im/quiz/2re7a9XMt2',
    image: bannerPetLoss,
    buttonContent: '테스트하기',
    bgColor: 'bg-[#FFF1EB]',
  },
  {
    title: '편지를 예쁘게\n만들어드려요',
    description: '문장과 사진을 보내면\n1분만에 신청 완료!',
    link: 'https://walla.my/rainbowletterimage',
    image: bannerCreateLetter,
    buttonContent: '설문조사 바로가기',
    bgColor: 'bg-[#FFF8ED]',
  },
];
