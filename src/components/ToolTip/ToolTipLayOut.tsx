import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { toolTipActions } from 'store/toolTip/toolTip-slice';
import { setFirstReplyUser } from 'utils/localStorage';

type Props = {
  children: ReactNode;
};

export default function ToolTipLayOut({ children }: Props) {
  const dispatch = useDispatch();

  const onClickSection = () => {
    dispatch(toolTipActions.closeToolTip());
    setFirstReplyUser();
  };

  return (
    <main
      onClick={onClickSection}
      className="flex size-full min-w-[22.5rem] justify-center bg-white pb-10"
    >
      {children}
    </main>
  );
}
