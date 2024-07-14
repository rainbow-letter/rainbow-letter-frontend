import Logo from '../../../assets/logo_white.png';
import CancelImage from '../../../assets/ph_x-bold.svg';

export default function BottomHeader({ onClick }: any) {
  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        onClick={onClick}
        className="absolute right-4 top-4"
      >
        <img src={CancelImage} alt="cancel" />
      </button>
      <img src={Logo} alt="logo" />
    </div>
  );
}
