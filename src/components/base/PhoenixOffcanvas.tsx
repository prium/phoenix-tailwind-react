import { cn } from '@hummingbirdui/react';
import { CSSProperties, PropsWithChildren, useEffect } from 'react';

interface PhoenixOffcanvasProps {
  open: boolean;
  fixed?: boolean;
  onHide?: () => void;
  className?: string;
  noBackdrop?: boolean;
  backdropClassName?: string;
  style?: CSSProperties;
  placement?: 'start' | 'end' | 'top' | 'bottom';
}

export const PhoenixOffcanvasContainer = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(className, 'phoenix-offcanvas-container')}>
      {children}
    </div>
  );
};

const PhoenixOffcanvas = ({
  children,
  open,
  fixed,
  onHide,
  className,
  backdropClassName,
  style,
  placement,
  noBackdrop
}: PropsWithChildren<PhoenixOffcanvasProps>) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [open]);

  return (
    <>
      <div
        className={cn(className, 'phoenix-offcanvas', {
          show: open,
          'phoenix-offcanvas-fixed': fixed,
          [`phoenix-offcanvas-${placement}`]: placement
        })}
        style={style}
      >
        {children}
      </div>
      {!noBackdrop && (
        <div
          className={cn(backdropClassName, 'phoenix-offcanvas-backdrop')}
          onClick={onHide}
        />
      )}
    </>
  );
};

export default PhoenixOffcanvas;
