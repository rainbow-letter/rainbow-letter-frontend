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
      className="flex w-full flex-1 items-center justify-between rounded-2xl border border-orange-400 px-5 py-4 text-orange-400"
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
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100">
        <img src={getHeartIconSrc()} alt="heart" />
      </div>
    </button>
  );
}

export default LikeButton;
