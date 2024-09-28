import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

type Props = {
  children: ReactNode;
};

export default function ToolTipSection({ children }: Props) {
  const { isOpen: ToolTipOpen } = useSelector(
    (state: RootState) => state.toolTip
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section
      className={`${
        ToolTipOpen ? 'block' : 'hidden'
      } fixed inset-y-0 z-50 w-[24.375rem] px-6`}
    >
      {children}
    </section>
  );
}
