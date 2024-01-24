/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
import React, { useState } from 'react';

import { incrementLikes } from '../../api/favorite';
import heart from '../../assets/heart.svg';
import fullGrayHeart from '../../assets/fullGrayHeart.svg';
import smallFullHeart from '../../assets/smallFullHeart.svg';

function LikeButton({ favoriteData }) {
  const [likeData, setLikeData] = useState(favoriteData);
  const [isClicked, setIsClicked] = useState(false);

  const handleFavorite = async () => {
    if (likeData.canIncrease) {
      const res = await incrementLikes(favoriteData.id);
      setLikeData(res);
    }
  };

  const handleInteractionStart = () => {
    setIsClicked(true);
  };

  const handleInteractionEnd = () => {
    setIsClicked(false);
  };

  const getHeartIconSrc = () => {
    if (!likeData.canIncrease) {
      return fullGrayHeart;
    }
    return isClicked ? smallFullHeart : heart;
  };

  return (
    <button
      id="click_heart"
      className="flex w-full px-5 py-4 flex-1 items-center justify-between border text-orange-400 border-orange-400 rounded-2xl"
      disabled={!likeData.canIncrease}
      type="button"
      onClick={handleFavorite}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <span className="grow">{likeData.total}</span>
      <div className="h-11 w-11 flex items-center justify-center border border-orange-100 rounded-full">
        <img src={getHeartIconSrc()} alt="heart" />
      </div>
    </button>
  );
}

export default LikeButton;
