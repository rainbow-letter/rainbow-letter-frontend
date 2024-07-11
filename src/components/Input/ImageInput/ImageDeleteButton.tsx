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
      className={`${isHover ? 'block' : 'hidden'} absolute -right-2.5 -top-2.5`}
      onClick={handleDelete}
      type="button"
    >
      <img alt="delete" src={icon} />
    </button>
  );
}

export default ImageDeleteButton;
