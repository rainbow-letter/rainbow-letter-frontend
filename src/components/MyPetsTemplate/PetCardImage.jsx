import defaultImage from '../../assets/Logo_256px.png';

function PetCardImage({ name, image }) {
  const displayedImageUrl = image || defaultImage;

  return (
    <figure className="absolute inset-x-0 top-0 h-[22.125rem] w-full">
      <img
        className="h-full w-full rounded-2xl border border-gray-2 object-cover"
        src={displayedImageUrl}
        alt={name}
      />
    </figure>
  );
}

export default PetCardImage;
