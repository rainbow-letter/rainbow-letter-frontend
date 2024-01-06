/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
import React, { useState } from 'react';

import { incrementLikes } from '../../api/favorite';
import heart from '../../assets/heart.svg';
import fullGrayHeart from '../../assets/fullGrayHeart.svg';
import smallFullHeart from '../../assets/smallFullHeart.svg';

function LikeButton({ favoriteData }) {
  const [isClicked, setIsClicked] = useState(false);
  const [canIncrease, setCanIncrease] = useState(favoriteData.canIncrease);

  const handleFavorite = () => {
    if (canIncrease) {
      const { canIncrease } = incrementLikes(favoriteData.id);
      setCanIncrease(canIncrease);
    }
  };

  const handleInteractionStart = () => {
    setIsClicked(true);
  };

  const handleInteractionEnd = () => {
    setIsClicked(false);
  };

  const getHeartIconSrc = () => {
    if (!canIncrease) {
      return fullGrayHeart;
    }
    return isClicked ? smallFullHeart : heart;
  };

  return (
    <button
      className="flex w-full px-5 py-4 flex-1 items-center justify-between border text-orange-400 border-orange-400 rounded-2xl"
      disabled={!canIncrease}
      type="button"
      onClick={handleFavorite}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <span className="grow">{favoriteData.total}</span>
      <div className="h-11 w-11 flex items-center justify-center border border-orange-100 rounded-full">
        <img src={getHeartIconSrc()} alt="heart" />
      </div>
    </button>
  );
}

export default LikeButton;
