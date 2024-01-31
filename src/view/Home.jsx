/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector } from 'react-redux';

import LogoBar from '../components/Home/LogoBar';
import BackgroundSection from '../components/Home/BackgroundSection';
import PetsSection from '../components/Home/PetsSection';
import Banner from '../components/Home/Banner';
import ContentsSection from '../components/Home/ContentsSection';
import OpenTalk from '../components/Home/OpenTalk';
import PhoneButton from '../components/Home/PhoneButton';
import Divider from '../components/Divider';
import HomeFooter from '../components/Home/HomeFooter';
import NavBar from '../components/NavBar';

export default function LandingPage() {
  const { token } = useSelector((state) => state.auth);

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
