import { Message, SNS_LOGIN } from 'components/Login/constants';

type Props = { message: Message };

export default function Header({ message: { title, sns } }: Props) {
  return (
    <section>
      <h2 className="text-heading-2">{title}</h2>
      <h3 className="mt-[2.188rem]">{sns}</h3>
      <div className="mt-3.5 flex justify-center gap-5">
        {SNS_LOGIN.map(({ icon, name, url }) => (
          <a key={name} href={url} type="button">
            <img alt={name} height={55} src={icon} width={55} />
          </a>
        ))}
      </div>
    </section>
  );
}
