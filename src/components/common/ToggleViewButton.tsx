import { Tooltip, cn } from '@hummingbirdui/react';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router';

interface ToggleViewButtonProps {
  active?: boolean;
  tooltip: string;
  /** Route to navigate to (renders `a.btn` like the gold `+ViewButtons`). */
  to?: string;
  onClick?: () => void;
  className?: string;
}

/** `+ViewButtons` in project-management/Common.pug: `a.btn.btn-phoenix-primary.px-4` */
const ToggleViewButton = ({
  active,
  tooltip,
  to = '#!',
  onClick,
  className,
  children
}: PropsWithChildren<ToggleViewButtonProps>) => {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Link
          to={to}
          className={cn(
            'btn btn-phoenix-primary px-4',
            { 'border-0 text-default': active },
            className
          )}
          onClick={e => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
        >
          {children}
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Content side="top">{tooltip}</Tooltip.Content>
    </Tooltip>
  );
};

export default ToggleViewButton;
