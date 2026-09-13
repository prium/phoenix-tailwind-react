import { PropsWithChildren, useEffect } from 'react';

interface CopyToastProps {
  /** called once `delay` has elapsed so the caller can unmount the toast */
  onDone: () => void;
  /** ms the toast stays up, gold's `autohide` delay */
  delay?: number;
}

/**
 * Gold `+CopyNotificationToast`
 * (`../phoenix-tailwind/src/pug/mixins/common/CopyNotificationToast.pug`): a
 * fixed dark toast that auto-dismisses. The gold fills its body from JS after a
 * clipboard write; here the caller passes the message as children.
 */
const CopyToast = ({
  onDone,
  delay = 3000,
  children
}: PropsWithChildren<CopyToastProps>) => {
  useEffect(() => {
    const timer = setTimeout(onDone, delay);
    return () => clearTimeout(timer);
  }, [onDone, delay]);

  return (
    <div className="fixed bottom-0 end-0 p-4 z-1050">
      <div
        className="toast show items-center text-white bg-dark border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="flex" data-hb-theme="dark">
          <div className="toast-body p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CopyToast;
