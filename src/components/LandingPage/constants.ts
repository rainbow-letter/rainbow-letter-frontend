import landing1 from '../../assets/landing-1.svg';
import landing2 from '../../assets/landing-2.svg';
import landing3 from '../../assets/landing-3.svg';
import landing4 from '../../assets/landing-4.svg';
import writeLetter from '../../assets/write-letter.mp4';
import wendHeart from '../../assets/send-heart.mp4';

interface LandingItems {
  id: number;
  imageSrc: string;
  gifImageSrc?: string;
}

const landingItems: LandingItems[] = [
  { id: 0, imageSrc: landing1, gifImageSrc: writeLetter },
  { id: 1, imageSrc: landing2 },
  { id: 2, imageSrc: landing3, gifImageSrc: wendHeart },
  { id: 3, imageSrc: landing4 },
];

export default landingItems;
