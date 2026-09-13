import { Dialog } from '@hummingbirdui/react';
import { ElementType, ReactNode } from 'react';

interface DialogHeadingProps {
  /** heading tag the gold uses (`h1`…`h6`) */
  as?: ElementType;
  /** the gold heading's class string, verbatim */
  className?: string;
  id?: string;
  children: ReactNode;
  /** accessible name when `children` is not plain text */
  title?: string;
}

/**
 * Modal heading for the gold markup that carries NO `.modal-title`.
 *
 * HB's `Dialog.Title` always emits `modal-title`, and the phoenix skin styles
 * that utility (`@apply text-lg text-muted` in components/modal.css), so
 * `<Dialog.Title asChild><h3 …>` silently restyles the heading — 5px too short
 * on an h3, 4px too tall on an h5. Rendering the gold heading separately and
 * giving Radix an sr-only title keeps both the markup and the a11y contract.
 *
 * Use `Dialog.Title asChild` directly when the gold heading *does* carry
 * `.modal-title` (e.g. the CRM filter modals).
 */
const DialogHeading = ({
  as: Tag = 'h5',
  className,
  id,
  children,
  title
}: DialogHeadingProps) => (
  <>
    <Dialog.Title className="sr-only">
      {title ?? (children as ReactNode)}
    </Dialog.Title>
    <Tag className={className} id={id}>
      {children}
    </Tag>
  </>
);

export default DialogHeading;
