import { ElementType } from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  to: string;
  label: string;
  Icon: ElementType;
  useStroke?: boolean;
};

type IconWrapperProps = {
  Icon: ElementType;
  isActive: boolean;
  useStroke?: boolean;
};

function IconWrapper({ Icon, isActive, useStroke = true }: IconWrapperProps) {
  const iconColor = isActive ? '#FFB74D' : '#BDBDBD';
  const iconProps = useStroke ? { stroke: iconColor } : { fill: iconColor };

  return <Icon {...iconProps} />;
}

function NavItem({ to, label, Icon, useStroke = true }: NavItemProps) {
  return (
    <NavLink
      className="flex w-[3.687rem] flex-col items-center justify-center space-y-0.5"
      to={to}
    >
      {({ isActive }) => (
        <>
          <div className="size-[26px]">
            <IconWrapper
              Icon={Icon}
              isActive={isActive}
              useStroke={useStroke}
            />
          </div>
          <span
            className={`text-[0.625rem] leading-[150%] ${
              isActive ? 'text-orange-400' : 'text-gray-2'
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default NavItem;
