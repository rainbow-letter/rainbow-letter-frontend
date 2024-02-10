import React from 'react';

import LogoBar from 'components/Home/LogoBar';
import BackgroundSection from 'components/Home/BackgroundSection';
import PetsSection from 'components/Home/PetsSection';
import Banner from 'components/Home/Banner';
import ContentsSection from 'components/Home/ContentsSection';
import OpenTalk from 'components/Home/OpenTalk';
import PhoneButton from 'components/Home/PhoneButton';
import Divider from 'components/Divider';
import HomeFooter from 'components/Home/HomeFooter';
import NavBar from 'components/NavBar';
import { getToken } from 'utils/localStorage';

export default function LandingPage() {
  const token = getToken();

  return (
    <main>
      <LogoBar />
      <BackgroundSection />
      <PetsSection isLoggedIn={!!token} />
      <Banner />
      <ContentsSection />
      <OpenTalk />
      <PhoneButton />
      <Divider />
      <HomeFooter />
      <NavBar />
    </main>
  );
}
