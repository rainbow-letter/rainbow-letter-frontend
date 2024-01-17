import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '../../store/modal';

import { INFO_MESSAGES } from './constants';
import InfoImage from '../../assets/gg_info.svg';

export default function TopicSuggestion() {
  const dispatch = useDispatch();

  return (
    <article className="mt-2.5">
      <button
        type="button"
        onClick={() => dispatch(openModal('TOPIC'))}
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
