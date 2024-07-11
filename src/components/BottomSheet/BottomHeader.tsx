import Logo from '../../assets/logo_white.png';
import CancelImage from '../../assets/ph_x-bold.svg';

export default function BottomHeader({ onClick }: any) {
  return (
    <div className="flex justify-center py-8">
      <button
        className="absolute right-4 top-4"
        onClick={onClick}
        type="button"
      >
        <img alt="cancel" src={CancelImage} />
      </button>
      <img alt="logo" src={Logo} />
    </div>
  );
}
