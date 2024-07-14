import post from 'assets/post.svg';
import { ShowcaseLetter } from 'components/LetterShowcase/type';

type LetterItemProps = {
  letter: ShowcaseLetter;
};

function LetterItem({ letter }: LetterItemProps) {
  const { type, petName, content } = letter;
  const prefix = type === 'letter' ? 'TO' : 'FROM';
  const backgroundColor = type === 'letter' ? 'bg-gray-2' : 'bg-orange-50';

  return (
    <section className="relative flex justify-center">
      <div className="absolute -top-2.5 h-5 w-2.5">
        <img className="" src={post} alt="pin" width="100%" height="100%" />
      </div>
      <section
        className={`h-[10.562rem] w-[8.625rem] rounded-2xl p-3.5 pb-5 font-Gyobomungo2019 ${backgroundColor}`}
      >
        <p className="pb-2 text-center leading-[130%]">{`${prefix}. ${petName}`}</p>
        <div
          className={`min-h-[104px] w-full whitespace-pre-wrap text-center leading-relaxed ${backgroundColor} bg-size-[100%_26px] bg-[repeating-linear-gradient(to_bottom,transparent_0%,transparent_25px,#BDBDBD_25px,#BDBDBD_26px)]`}
        >
          {content}
        </div>
      </section>
    </section>
  );
}

export default LetterItem;
