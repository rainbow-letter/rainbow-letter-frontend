import { Link } from 'react-router-dom';

type Props = {
  item: {
    id: number;
    title: any;
    description: string;
    image?: string;
    url: string;
  };
};

export default function PetContentsItem({
  item: { title, description, image, url },
}: Props) {
  return (
    <Link
      to={url}
      target="_blank"
      className="mt-3 flex items-center justify-between gap-3 rounded-[16px] bg-orange-50 px-[18px] py-4"
    >
      <div className="flex w-full flex-col items-center gap-2">
        <div className="text-[14px] font-[600] leading-[17.5px]">
          {title &&
            title.map(({ id, contents }: any) => (
              <h3 key={`contents-title-${id}`} className="text-center">
                {contents}
              </h3>
            ))}
        </div>
        <span className="text-[12px] leading-[12px] text-[400] text-gray-1">
          {description}
        </span>
      </div>
      <img
        src={image}
        alt="강아지 사진"
        className="h-[109px] min-w-[150px] rounded-[16px]"
      />
    </Link>
  );
}
