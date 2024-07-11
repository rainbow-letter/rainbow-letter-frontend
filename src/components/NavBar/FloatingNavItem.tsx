import { NavLink } from 'react-router-dom';

type FloatingNavItemProps = {
  to: string;
  label: string;
  icon: string;
};

function FloatingNavItem({ to, label, icon }: FloatingNavItemProps) {
  return (
    <NavLink className="mx-1.5 -translate-y-2.5" to={to}>
      {({ isActive }) => (
        <div className="flex size-[3.687rem] flex-col items-center justify-center space-y-0.5 rounded-full bg-nav-gradient">
          <div className="size-6">
            <img alt={label} height="100%" src={icon} width="100%" />
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
