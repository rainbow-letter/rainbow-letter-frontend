import React from 'react';
import { useDispatch } from 'react-redux';

import InfoImage from '../../assets/gg_info.svg';
import { openModal } from '../../store/modal';

export default function TopicSuggestion() {
  const dispatch = useDispatch();

  return (
    <article className="mt-2.5">
      <button
        type="button"
        onClick={() => dispatch(openModal())}
        className="flex items-center gap-1"
      >
        <img src={InfoImage} alt="infomation" />
        <p className="underline text-caption text-gray-2">
          TIP. 이런 주제로도 써보세요
        </p>
      </button>
    </article>
  );
}
