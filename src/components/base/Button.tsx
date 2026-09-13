import React, { PropsWithChildren, ReactElement } from 'react';
import {
  Button as HbButton,
  buttonVariants,
  Loader,
  cn
} from '@hummingbirdui/react';
import { cva } from 'class-variance-authority';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'neutral';

/** Style families. `phoenix` is the Phoenix-specific soft button. */
export type ButtonStyle =
  | 'filled'
  | 'subtle'
  | 'outline'
  | 'text'
  | 'link'
  | 'icon'
  | 'phoenix';

/**
 * Legacy Bootstrap-era variant strings (`phoenix-secondary`, `outline-primary`,
 * plain colour names …) are still accepted and resolved to a
 * `{ style, color }` pair so existing call sites keep working.
 */
export type ButtonVariant =
  | ButtonStyle
  | ''
  | ButtonColor
  | `outline-${ButtonColor}`
  | `phoenix-${ButtonColor}`
  | `subtle-${ButtonColor}`
  | 'circle'
  | 'loading';

export type ButtonSize = 'sm' | 'md' | 'lg';

/** Phoenix soft buttons — classes come from assets/css/components/buttons.css */
export const phoenixButtonVariants = cva('btn', {
  variants: {
    color: {
      primary: 'btn-phoenix-primary',
      secondary: 'btn-phoenix-secondary',
      success: 'btn-phoenix-success',
      danger: 'btn-phoenix-danger',
      warning: 'btn-phoenix-warning',
      info: 'btn-phoenix-info',
      dark: 'btn-phoenix-dark',
      light: 'btn-phoenix-light',
      neutral: 'btn-phoenix-secondary'
    },
    size: { sm: 'btn-sm', md: '', lg: 'btn-lg' },
    shape: { default: '', square: 'btn-square', circle: 'btn-circle' }
  },
  defaultVariants: { color: 'primary', size: 'md', shape: 'default' }
});

const COLORS: ReadonlySet<string> = new Set<ButtonColor>([
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  'neutral'
]);
const STYLES: ReadonlySet<string> = new Set<ButtonStyle>([
  'filled',
  'subtle',
  'outline',
  'text',
  'link',
  'icon',
  'phoenix'
]);

interface ResolvedVariant {
  style: ButtonStyle | null;
  color: ButtonColor | null;
  extra?: string;
}

const resolveVariant = (
  variant: ButtonVariant | undefined,
  color?: ButtonColor
): ResolvedVariant => {
  if (!variant || variant === 'loading') return { style: null, color: null };
  if (variant === 'circle')
    return { style: null, color: null, extra: 'btn-circle' };
  if (STYLES.has(variant)) {
    const style = variant as ButtonStyle;
    const needsColor = !['link', 'icon'].includes(style);
    return { style, color: color ?? (needsColor ? 'primary' : null) };
  }
  if (COLORS.has(variant))
    return { style: 'filled', color: variant as ButtonColor };
  const dash = variant.indexOf('-');
  if (dash > 0) {
    const prefix = variant.slice(0, dash);
    const rest = variant.slice(dash + 1);
    if (['phoenix', 'subtle', 'outline'].includes(prefix) && COLORS.has(rest)) {
      return { style: prefix as ButtonStyle, color: rest as ButtonColor };
    }
  }
  return { style: null, color: null, extra: `btn-${variant}` };
};

/** HbButton already emits the `btn` base class; avoid emitting it twice. */
const withoutBase = (classes: string) => classes.replace(/^btn(?:\s+|$)/, '');

export interface ButtonProps
  extends Omit<HbButton.Props, 'variant' | 'color' | 'size' | 'shape'> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: 'default' | 'square' | 'circle';
  startIcon?: ReactElement<{ className?: string }>;
  endIcon?: ReactElement<{ className?: string }>;
  loading?: boolean;
  loadingPosition?: 'start' | 'end';
  className?: string;
}

const Button = ({
  children,
  startIcon,
  endIcon,
  loading,
  loadingPosition = 'start',
  className,
  variant = '',
  color,
  size,
  shape,
  disabled,
  type = 'button',
  asChild,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const resolved = resolveVariant(variant, color);

  // Radix Slot (asChild) accepts exactly one child: render the child as-is and
  // skip icon/loader decorations, which would produce multiple children.
  const content = asChild ? (
    children
  ) : (
    <>
      {loading && loadingPosition === 'start' && (
        <Loader variant="border" size="sm" className="me-2" />
      )}
      {startIcon &&
        React.cloneElement(startIcon, {
          className: cn(startIcon.props.className, 'me-1')
        })}
      {children}
      {endIcon &&
        React.cloneElement(endIcon, {
          className: cn(endIcon.props.className, 'ms-1')
        })}
      {loading && loadingPosition === 'end' && (
        <Loader variant="border" size="sm" className="ms-2" />
      )}
    </>
  );

  const variantClasses =
    resolved.style === 'phoenix'
      ? phoenixButtonVariants({ color: resolved.color, size, shape })
      : buttonVariants({
          variant: resolved.style,
          color: resolved.color,
          size: size ?? null,
          shape: shape ?? null
        });

  return (
    <HbButton
      variant={null}
      color={null}
      size={null}
      shape={null}
      asChild={asChild}
      type={asChild ? undefined : type}
      disabled={loading || disabled}
      {...rest}
      className={cn(
        withoutBase(variantClasses),
        resolved.extra,
        loading && 'btn-loading leading-none flex items-center relative',
        className
      )}
    >
      {content}
    </HbButton>
  );
};

export default Button;
