import { NavLink } from 'react-router-dom';

type FloatingNavItemProps = {
  to: string;
  label: string;
  icon: string;
};

function FloatingNavItem({ to, label, icon }: FloatingNavItemProps) {
  return (
    <NavLink to={to} className="mx-1.5 -translate-y-2.5">
      {({ isActive }) => (
        <div className="flex size-[3.687rem] flex-col items-center justify-center space-y-0.5 rounded-full bg-nav-gradient">
          <div className="size-6">
            <img src={icon} alt={label} width="100%" height="100%" />
          </div>
          <span className="text-[0.625rem] leading-[150%] text-white">
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
}

export default FloatingNavItem;
