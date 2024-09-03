import CoverImage from 'components/Common/CoverImage';
import useGetImage from 'hooks/useGetImage';
import { LetterItemResponse } from 'types/letters';

type Props = {
  letterData: LetterItemResponse;
};

export default function SentPhoto({ letterData }: Props) {
  const { image } = useGetImage(letterData.letter.image);

  return (
    <section className="not-img mt-16">
      <h3 className="text-solo-large">아이에게 보낸 사진</h3>
      <CoverImage image={image} className="relative mt-8" />
    </section>
  );
}
