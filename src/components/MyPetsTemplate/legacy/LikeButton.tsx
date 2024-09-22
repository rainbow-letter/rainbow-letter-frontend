import { useState } from 'react';

import heart from '../../assets/heart.svg';
import fullGrayHeart from '../../assets/fullGrayHeart.svg';
import smallFullHeart from '../../assets/smallFullHeart.svg';
import { updatePetLike } from 'store/pet/pet-action';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

interface LikeButtonProps {
  petId: number;
  favoriteData: {
    id: number;
    total: number;
    dayIncreaseCount: number;
    canIncrease: boolean;
    lastIncreasedAt: string;
  };
}

function LikeButton({ petId, favoriteData }: LikeButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleFavorite = () => {
    dispatch(updatePetLike(petId));
  };

  const handleInteractionStart = () => {
    setIsClicked(true);
  };

  const handleInteractionEnd = () => {
    setIsClicked(false);
  };

  const getHeartIconSrc = () => {
    if (!favoriteData.canIncrease) {
      return fullGrayHeart;
    }
    return isClicked ? smallFullHeart : heart;
  };

  return (
    <button
      id="click_heart"
      className="flex w-full flex-1 items-center justify-between rounded-2xl border border-orange-400 px-5 py-4 text-orange-400"
      disabled={!favoriteData.canIncrease}
      type="button"
      onClick={handleFavorite}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <span className="grow">{favoriteData.total}</span>
      <div className="flex size-11 items-center justify-center rounded-full border border-orange-100">
        <img src={getHeartIconSrc()} alt="heart" />
      </div>
    </button>
  );
}

export default LikeButton;
