import React, { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
  isShow: boolean | undefined;
};

export default function Container({ children, isShow }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section
      className={`${
        isShow ? 'block' : 'hidden'
      } fixed inset-y-0 z-50 w-[24.375rem] bg-[#000000]/50`}
    >
      {children}
    </section>
  );
}
