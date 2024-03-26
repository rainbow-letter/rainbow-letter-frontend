import notice1 from '../../assets/pwaNotice_1.svg';
import notice2 from '../../assets/pwaNotice_2.svg';
import notice3 from '../../assets/pwaNotice_3.svg';

interface LandingItems {
  id: number;
  imageSrc: string;
}

const landingItems: LandingItems[] = [
  {
    id: 0,
    imageSrc: notice1,
  },
  {
    id: 1,
    imageSrc: notice2,
  },
  {
    id: 2,
    imageSrc: notice3,
  },
];

export default landingItems;
