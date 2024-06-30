import React from 'react';

import Welcome from 'components/Donate/Welcome';
import Description from 'components/Donate/Description';
import Account from 'components/Donate/Account';
import Example from 'components/Donate/Example';
import UsageHistory from 'components/Donate/UsageHistory';
import ExternalDonation from 'components/Donate/ExternalDonation';
import Contact from 'components/Donate/Contact';

export default function Donate() {
  return (
    <main className="bg-[#F9F9F9] px-[1.563rem] pb-32">
      <Welcome />
      <Description />
      <Account />
      <Example />
      <UsageHistory />
      <ExternalDonation />
      <Contact />
    </main>
  );
}
