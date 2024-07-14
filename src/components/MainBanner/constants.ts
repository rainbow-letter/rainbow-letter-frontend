import bannerLetter from 'assets/banner-letter.svg';
import FitaPat from 'assets/ad_fitapat_4.png';
import SaveImage from 'assets/banner_save.png';
import Donate from 'assets/banner_support.svg';
import PetLoss from 'assets/banner_petloss.svg';

export const BANNER_ITEMS = [
  {
    id: 1,
    category: 'EVENT',
    link: '/donate',
    image: Donate,
    cover: true,
  },
  {
    id: 5,
    category: 'EVENT',
    link: 'http://pf.kakao.com/_MNevG/105908916',
    image: PetLoss,
    cover: true,
  },
  {
    id: 2,
    link: 'https://www.fitapat.com/product/case/91',
    image: FitaPat,
    cover: true,
  },
  {
    id: 3,
    link: 'https://blog.naver.com/rainbowletter/223461370330',
    image: SaveImage,
    cover: true,
  },
  {
    id: 4,
    title: `무지개 너머\n답장을 받아보세요`,
    description: '마음껏, 무료로',
    link: '/landing',
    image: bannerLetter,
    buttonContent: '자세히 보기',
    bgColor: 'bg-orange-50',
  },
];
