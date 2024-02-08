import React from 'react';
import { useDispatch } from 'react-redux';

import { INFO_MESSAGES } from 'components/Write/constants';
import { modalActions } from '../../store/modal-slice';
import InfoImage from '../../assets/gg_info.svg';

export default function TopicSuggestion() {
  const dispatch = useDispatch();

  return (
    <article className="mt-2.5">
      <button
        type="button"
        onClick={() => dispatch(modalActions.openModal('TOPIC'))}
        className="flex items-center gap-1"
      >
        <img src={InfoImage} alt="information" />
        <p className="underline text-caption text-gray-2">
          {INFO_MESSAGES.SUGGEST_TOPIC}
        </p>
      </button>
    </article>
  );
}
