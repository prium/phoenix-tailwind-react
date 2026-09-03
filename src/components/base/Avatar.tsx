import { cn } from '@hummingbirdui/react';
import avatar from 'assets/img/team/40x40/avatar.webp';
import { Children, PropsWithChildren } from 'react';

export type Size = '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'l' | 'm' | 's';
export type Variant = 'image' | 'name' | 'emoji';
export type Rounded = 'circle' | 'square' | 'soft';
export type Status = 'online' | 'offline' | 'away' | 'do-not-disturb';

/**
 * Phoenix size names → Hummingbird/phoenix-tailwind avatar classes
 * (px: s 24, m 32, l 40 = default, xl 48, 2xl 56, 3xl 72, 4xl 96, 5xl 150).
 */
const sizeClass: Record<Size, string> = {
  s: 'avatar-xs',
  m: 'avatar-sm',
  l: '',
  xl: 'avatar-lg',
  '2xl': 'avatar-xl',
  '3xl': 'avatar-2xl',
  '4xl': 'avatar-3xl',
  '5xl': 'avatar-4xl'
};

const statusClass: Record<Status, string> = {
  online: 'avatar-status-online',
  offline: 'avatar-status-offline',
  away: 'avatar-status-away',
  'do-not-disturb': 'avatar-status-busy'
};

interface AvatarProps {
  size: Size;
  src?: string;
  variant?: Variant;
  rounded?: Rounded;
  status?: Status;
  placeholder?: boolean;
  thumbnail?: boolean;
  imageClassName?: string;
  className?: string;
}
interface AvatarGroupProps {
  className?: string;
  total?: number;
  size: Size;
}

const roundedClass = (rounded: Rounded) =>
  // gold `+Avatar({round: 'rounded-lg'})`; `rounded-soft` was invented here
  // and has no --radius-soft token, so it rendered square
  ({ circle: 'rounded-full', soft: 'rounded-lg', square: '' })[rounded];

const Avatar = ({
  size,
  src,
  variant = 'image',
  rounded = 'circle',
  status,
  className,
  imageClassName,
  thumbnail,
  children,
  placeholder
}: PropsWithChildren<AvatarProps>) => {
  return (
    <div
      className={cn(
        className,
        'avatar',
        sizeClass[size],
        status && statusClass[status]
      )}
    >
      {variant === 'image' && (
        <img
          src={src ? src : avatar}
          alt="avatar"
          className={cn(imageClassName, roundedClass(rounded), {
            'img-thumbnail bg-soft': thumbnail,
            'avatar-placeholder': !src || placeholder
          })}
        />
      )}

      {variant === 'name' && (
        <div className={cn('avatar-name', roundedClass(rounded))}>
          <span>{children}</span>
        </div>
      )}
      {variant === 'emoji' && (
        <div className={cn('avatar-emoji', roundedClass(rounded))}>
          <span role="img" aria-label="Emoji">
            {children}
          </span>
        </div>
      )}
    </div>
  );
};

export const AvatarGroup = ({
  children,
  className,
  total,
  size
}: PropsWithChildren<AvatarGroupProps>) => {
  return (
    <div className={cn(className, 'avatar-group')}>
      {children}
      {total && total > Children.count(children) && (
        <Avatar size={size} variant="name">
          +{total - Children.count(children)}
        </Avatar>
      )}
    </div>
  );
};

Avatar.Group = AvatarGroup;

export default Avatar;
