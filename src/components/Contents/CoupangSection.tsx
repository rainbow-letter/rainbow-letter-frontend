import Info from '../../assets/ic_letterBox_info.svg';

export default function CoupangSection() {
  return (
    <section className="px-[18px] py-[30px]">
      <h2 className="text-[18px] font-bold leading-[18px]">쿠팡 광고</h2>
      <p className="mt-3 text-[14px] font-[400] leading-[21px] text-gray-1">
        이 링크를 통해 구매하면 무지개편지 운영에 도움이 돼요
      </p>
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=809413&template=carousel&trackingCode=AF8807113&subId=&width=354&height=145&tsource="
        width="354"
        height="145"
        className="mt-3"
      ></iframe>
      <div className="mt-[10px] flex items-start gap-[6.5px]">
        <img src={Info} alt="인포 아이콘" />
        <p className="text-[12px] font-[300] text-[#424242]">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </p>
      </div>
    </section>
  );
}
