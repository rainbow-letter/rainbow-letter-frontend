import { Link } from 'react-router-dom';

import { USER_ACTIONS } from 'components/Write/constants';
import thinPlus from '../../assets/ic_round-plus.svg';

export default function ResisterButtonSection() {
  return (
    <section className="mt-5">
      <Link
        className="flex cursor-pointer items-center justify-center gap-1.5 rounded-2xl border border-dashed border-orange-400 py-5 text-solo-medium text-orange-400"
        to="/my-pets/register"
      >
        <img alt="thin plus icon" src={thinPlus} />
        <p>{USER_ACTIONS.RESISTER_PET}</p>
      </Link>
    </section>
  );
}
