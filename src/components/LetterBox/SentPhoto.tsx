import CoverImage from 'components/Common/CoverImage';
import { LetterItemResponse } from 'types/letters';
import { formatImageType } from 'utils/image';

type Props = {
  letterData: LetterItemResponse;
};

export default function SentPhoto({ letterData }: Props) {
  return (
    <section className="not-img mt-16">
      <h3 className="text-solo-large">아이에게 보낸 사진</h3>
      <CoverImage
        image={formatImageType(letterData.letter.image)}
        className="relative mt-8"
      />
    </section>
  );
}
