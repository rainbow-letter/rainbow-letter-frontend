import React from 'react';

import { Message, SNS_LOGIN } from 'components/Login/constants';

type Props = { message: Message };

export default function Header({ message: { title } }: Props) {
  return (
    <section>
      <h2 className="text-heading-2">{title}</h2>
      <h3 className="mt-[2.188rem]">SNS로 간편하게 가입하기</h3>
      <div className="flex justify-center gap-5 mt-[0.875rem]">
        {SNS_LOGIN.map(({ icon, name, url }) => (
          <a href={url} type="button">
            <img src={icon} width={55} height={55} alt={name} />
          </a>
        ))}
      </div>
    </section>
  );
}
