import landing1 from '../../assets/landing_1.svg';
import landing2 from '../../assets/landing_2.svg';
import landing3 from '../../assets/landing_3.svg';
import landing4 from '../../assets/landing_4.svg';
import landing5 from '../../assets/landing_5.svg';

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
    imageSrc: landing1,
  },
  {
    id: 1,
    imageSrc: landing2,
  },
  {
    id: 2,
    imageSrc: landing3,
  },
  {
    id: 3,
    imageSrc: landing4,
  },
  {
    id: 4,
    imageSrc: landing5,
  },
];

const NoticeItems: LandingItems[] = [
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

export { landingItems, NoticeItems };
