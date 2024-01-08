import React from 'react';

function ImageDeleteButton({ icon, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button
      type="button"
      className="hidden absolute -top-2.5 -right-2.5"
      onClick={handleDelete}
    >
      <img src={icon} alt="delete" />
    </button>
  );
}

export default ImageDeleteButton;
