import React from 'react';

import Welcome from 'components/Donate/Welcome';
import Description from 'components/Donate/Description';
import Account from 'components/Donate/Account';
import Example from 'components/Donate/Example';
import UsageHistory from 'components/Donate/UsageHistory';
import ExternalDonation from 'components/Donate/ExternalDonation';
import Contact from 'components/Donate/Contact';
import NavBar from 'components/NavBar';

export default function Donate() {
  return (
    <main className="bg-[#F9F9F9] px-[1.563rem] pb-40">
      <Welcome />
      <Description />
      <Account />
      <section className="mt-28">
        <div className="flex flex-col text-center text-[1.375rem] font-bold">
          <span>7월 후원자 명단</span>
          <span>진심으로 감사합니다!</span>
        </div>
        <article className="mt-6 flex flex-col items-center justify-between gap-y-4 rounded-2xl bg-white px-6 py-4">
          <span className="mb-3 text-center text-gray-1">
            배콩이, 베니, 몽실이, 솔이, 솔이, <br /> 사랑이, 꽃남이, 김초코,
            몽구, 아롱이 옥정이, 깜순이, 아람이
          </span>
          <span className="mb-3 text-center text-gray-1">
            유*선, 한*경, 이*향, 안*진, 박*자, 이*경, 임*빈, 이*희, 이*미,
            양*희, 김*희, 남*경, 장*지, 이*영, 김*숙, 오*주, 김*진, 홍*혜,
            이*경, 송*민, 이*아, 황*현, 강*지, 김*영, 미기재(5)
          </span>
        </article>
      </section>
      <Example />
      <UsageHistory />
      <ExternalDonation />
      <Contact />
      <NavBar />
    </main>
  );
}
