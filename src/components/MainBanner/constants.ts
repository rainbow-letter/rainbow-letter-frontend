/* eslint-disable import/prefer-default-export */
import bannerLetter from 'assets/banner-letter.svg';
import bannerFitaPat from 'assets/ad_fitapat_4.png';
import bannerSavedImage from 'assets/banner_save.png';
import mainBook from 'assets/banner_book_0623.svg';

export const BANNER_ITEMS = [
  {
    id: 0,
    category: 'EVENT',
    title: `엽서북`,
    description: '엽서북',
    link: 'https://smartstore.naver.com/rainbowletter/products/10422885853',
    image: mainBook,
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
  // {
  //   id: 2,
  //   category: 'EVENT',
  //   title: `무지개 마을\n케이스&그립톡\n사전 예약 중`,
  //   description: '',
  //   link: 'https://blog.naver.com/rainbowletter/223461370330',
  //   image: bannerSavedImage,
  //   buttonContent: '사전 예약하기',
  //   bgColor: 'bg-[#F9F9F9]',
  //   cover: true,
  // },
  {
    id: 3,
    title: `무지개 너머\n답장을 받아보세요`,
    description: '마음껏, 무료로',
    link: '/landing',
    image: bannerLetter,
    buttonContent: '자세히 보기',
    bgColor: 'bg-[#FFF8ED]',
  },
];
