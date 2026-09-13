import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import { Badge as HbBadge, cn } from '@hummingbirdui/react';
import { cva } from 'class-variance-authority';

export type BadgeVariant =
  | 'phoenix'
  | 'default'
  | 'tag'
  | 'filled'
  | 'subtle'
  | 'outline';

export type BadgeBg =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

/** Phoenix soft badges — classes come from assets/css/components/badge.css */
export const phoenixBadgeVariants = cva('badge', {
  variants: {
    color: {
      primary: 'badge-phoenix-primary',
      secondary: 'badge-phoenix-secondary',
      success: 'badge-phoenix-success',
      danger: 'badge-phoenix-danger',
      warning: 'badge-phoenix-warning',
      info: 'badge-phoenix-info'
    },
    pill: { true: 'rounded-full' }
  },
  defaultVariants: { color: 'primary' }
});

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
  variant?: BadgeVariant;
  /** Colour. `bg` is the legacy react-bootstrap name and is kept as an alias. */
  color?: BadgeBg;
  bg?: BadgeBg;
  pill?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactElement;
  iconPosition?: 'start' | 'end';
  iconFamily?: 'fa' | 'unicons' | 'feather';
  className?: string;
}

const Badge = ({
  children,
  bg,
  color,
  pill,
  size,
  icon,
  className,
  variant = 'default',
  iconPosition = 'start',
  ...rest
}: PropsWithChildren<BadgeProps>) => {
  const resolvedColor = color ?? bg;

  const content = (
    <>
      {icon && iconPosition === 'start' && icon}
      {variant === 'phoenix' ? (
        <span className="badge-label">{children}</span>
      ) : (
        children
      )}
      {icon && iconPosition === 'end' && icon}
    </>
  );

  if (variant === 'phoenix') {
    return (
      <span
        className={cn(
          phoenixBadgeVariants({ color: resolvedColor, pill }),
          className
        )}
        {...rest}
      >
        {content}
      </span>
    );
  }

  if (variant === 'tag') {
    return (
      <span
        className={cn('badge badge-tag', pill && 'rounded-full', className)}
        {...rest}
      >
        {content}
      </span>
    );
  }

  return (
    <HbBadge
      variant={variant === 'default' ? 'filled' : variant}
      color={resolvedColor}
      size={size}
      className={cn(pill && 'rounded-full', className)}
      {...rest}
    >
      {content}
    </HbBadge>
  );
};

export default Badge;
