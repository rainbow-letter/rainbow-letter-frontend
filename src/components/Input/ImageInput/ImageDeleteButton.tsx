import React from 'react';

type Props = {
  isHover: boolean;
  icon: string;
  onDelete: () => void;
};

function ImageDeleteButton({ isHover, icon, onDelete }: Props) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button
      type="button"
      className={`${isHover ? 'block' : 'hidden'} absolute -top-2.5 -right-2.5`}
      onClick={handleDelete}
    >
      <img src={icon} alt="delete" />
    </button>
  );
}

export default ImageDeleteButton;
