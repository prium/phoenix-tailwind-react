import { cn } from '@hummingbirdui/react';
import { IconProps, Icon as IconType } from '@iconscout/react-unicons';

interface UniconProps extends IconProps {
  icon: IconType;
  /**
   * Wrap the svg in the 1lh line box the gold's `span.uil` font icons occupy
   * (a bare 16px svg otherwise sits high next to text and inside anchored
   * containers like `.flatpickr-icon`).
   */
  lineBox?: boolean;
  /** classes for the `lineBox` span wrapper */
  wrapperClassName?: string;
}

const Unicon = ({
  icon: Icon,
  lineBox,
  wrapperClassName,
  ...rest
}: UniconProps) => {
  const icon = <Icon {...rest} />;
  if (!lineBox) {
    return icon;
  }
  return (
    <span className={cn('inline-flex items-center h-lh', wrapperClassName)}>
      {icon}
    </span>
  );
};

export default Unicon;
