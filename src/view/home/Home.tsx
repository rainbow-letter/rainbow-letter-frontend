import PetsSection from 'components/Home/PetsSection';
import ContentsSection from 'components/Home/ContentsSection';
import LetterShowcase from 'components/LetterShowcase';
import OpenTalk from 'components/Home/OpenTalk';
import PhoneButton from 'components/Home/PhoneButton';
import Divider from 'components/Divider';
import HomeFooter from 'components/Home/HomeFooter';
import NavBar from 'components/NavBar';
import BottomSheet from 'components/BottomSheet';
import { getToken } from 'utils/localStorage';
import LetterPostButton from 'components/LetterPostButton';
import HomeDivider from 'components/Home/Divider';
import PWAGuide from 'components/PWAGuide';
import MainBanners from 'components/MainBanner/MainBanners';

export default function LandingPage() {
  const token = getToken();

  return (
    <main className="relative">
      <PWAGuide />
      <MainBanners />
      <PetsSection isLoggedIn={!!token} />
      <HomeDivider />
      <LetterShowcase />
      <LetterPostButton />
      <HomeDivider />
      <ContentsSection />
      <OpenTalk />
      <PhoneButton />
      <Divider />
      <HomeFooter />
      <NavBar />
      <BottomSheet />
    </main>
  );
}
