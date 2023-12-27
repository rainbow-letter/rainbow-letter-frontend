import React from 'react';

import InfoImage from '../../assets/gg_info.svg';

export default function TopicSuggestion() {
  return (
    <article className="mt-2.5">
      <button
        type="button"
        onClick={() => alert('모달 나와랏')}
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
