import { PHONE_MESSAGE } from 'components/Home/constants';
import phone from '../../assets/Phone.svg';

export default function PhoneButton() {
  const handlePhoneButtonClick = () => {
    document.location.href = 'tel:109';
  };

  return (
    <section className="mb-8 h-[3.125rem] px-7">
      <button
        className="flex size-full items-center justify-center gap-x-2.5 rounded-2xl bg-orange-50 py-4 text-solo-label font-bold text-orange-400"
        onClick={() => handlePhoneButtonClick()}
        type="button"
      >
        <div className="size-4">
          <img alt="phone" height="100%" src={phone} width="100%" />
        </div>
        <p>{PHONE_MESSAGE}</p>
      </button>
    </section>
  );
}
