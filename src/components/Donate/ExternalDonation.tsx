import Donation from 'assets/im_donate_donation.svg';

export default function ExternalDonation() {
  return (
    <section className="mt-[3.75rem] px-8 text-center">
      <h3 className="text-[1.375rem] font-bold leading-[150%]">
        목표 후원금 50만원 <br />
        초과 달성 시 외부 후원
      </h3>
      <p className="mt-3 text-caption">
        다음 달 운영비 일부 제외 동물단체 후원
      </p>
      <img alt="후원하기 이미지" className="mb-14 mt-5" src={Donation} />
    </section>
  );
}
