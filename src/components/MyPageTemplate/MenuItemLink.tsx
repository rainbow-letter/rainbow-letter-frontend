import { Link } from 'react-router-dom';

import chevronRight from '../../assets/chevronRight.svg';

type Props = {
  to: string;
  label: string;
};

function MenuItemLink({ to, label }: Props) {
  return (
    <Link className="flex items-center justify-between" to={to}>
      <div className="p-2.5 text-solo-large">{label}</div>
      <div>
        <img alt="chevronRight" src={chevronRight} />
      </div>
    </Link>
  );
}

export default MenuItemLink;
