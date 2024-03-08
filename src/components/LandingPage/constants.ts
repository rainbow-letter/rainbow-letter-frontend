// import landing from '../../assets/landing.svg';
import landing1 from '../../assets/landing_1.svg';
import landing2 from '../../assets/landing_2.png';
import landing3 from '../../assets/landing_3.png';
import landing4 from '../../assets/landing_4.png';
import landing5 from '../../assets/landing_5.png';

interface LandingItems {
  id: number;
  imageSrc: string;
}

// const landingItems: LandingItems = { id: 0, imageSrc: landing };
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

export default landingItems;
