import { cn } from '@hummingbirdui/react';
import { ComponentProps } from 'react';

export interface PhoenixContainerProps extends ComponentProps<'div'> {
  /** `.container-small` (phoenix-tailwind container.css) instead of `.container` */
  small?: boolean;
}

const PhoenixContainer = ({
  small,
  className,
  ...rest
}: PhoenixContainerProps) => {
  return (
    <div
      className={cn(small ? 'container-small' : 'container', className)}
      {...rest}
    />
  );
};

export default PhoenixContainer;
