import { Link } from 'react-router-dom';

import { INFO_MESSAGES, USER_ACTIONS } from 'components/Home/constants';

export default function NoPets() {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-gray-3 px-[1.063rem]">
      <h4 className="mb-[0.813rem] mt-[1.875rem] text-heading-3">
        {INFO_MESSAGES.PETS_ABSENT}
      </h4>
      <p>{INFO_MESSAGES.SUGGEST_PETS_REGISTRATION}</p>
      <div className="mb-4 mt-7 flex w-full gap-4 text-solo-large">
        <Link className="w-full" to="/my-pets/register">
          <button
            className="w-full rounded-2xl bg-orange-400 px-[1.375rem] py-5 text-white"
            type="button"
          >
            {USER_ACTIONS.PEST_REGISTRATION}
          </button>
        </Link>
      </div>
    </article>
  );
}
