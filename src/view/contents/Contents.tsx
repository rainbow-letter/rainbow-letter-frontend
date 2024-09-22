import AppBar from 'components/AppBar';
import Divider from 'components/Home/Divider';
import EventSection from 'components/Contents/EventSection';
import CoupangSection from 'components/Contents/CoupangSection';
import OtherContentsSection from 'components/Contents/OtherContentsSection';
import NavBar from 'components/NavBar';

export default function Contents() {
  return (
    <main className="pb-28">
      <div className="bg-gray-6">
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=802491&template=banner&trackingCode=AF8807113&subId=&width=320&height=100"
          width="320"
          height="100"
          className="mx-auto"
        ></iframe>
      </div>
      <AppBar />
      <Divider />
      <EventSection />
      <Divider />
      <CoupangSection />
      <Divider />
      <OtherContentsSection />
      <NavBar />
    </main>
  );
}
