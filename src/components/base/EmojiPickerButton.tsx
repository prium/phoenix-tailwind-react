import { createPopup } from '@picmo/popup-picker';
import type { PopupPickerController } from '@picmo/popup-picker';
import { cn } from '@hummingbirdui/react';
import {
  PropsWithChildren,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef
} from 'react';

export interface EmojiPickerButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onSelect'> {
  /** Called with the chosen emoji character. */
  onSelect?: (emoji: string) => void;
  /** Where the popup sits relative to the button. */
  position?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'auto';
}

/**
 * Picmo's popup picker, anchored to whatever button you render as children of
 * this trigger — the same component the static theme builds from its
 * `[data-picmo]` buttons, so the phoenix skin in `assets/css/plugins/picmo.css`
 * applies as-is. That skin reads `[data-hb-theme='dark']`, so the picker
 * follows the app theme with no extra wiring.
 *
 * The popup is appended to `<body>` and floated by Picmo, so it overlays the
 * page instead of growing the container it sits in.
 */
const EmojiPickerButton = ({
  onSelect,
  position = 'bottom-start',
  className,
  children,
  ...rest
}: PropsWithChildren<EmojiPickerButtonProps>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pickerRef = useRef<PopupPickerController | null>(null);
  // read the latest handler without rebuilding the picker on every render
  const handler = useRef(onSelect);
  handler.current = onSelect;

  // Created on first use, not on mount. Picmo fetches its emoji data and caches
  // it in IndexedDB as soon as a picker exists, so building one per mount made
  // StrictMode's mount/unmount/mount race two pickers against the same
  // database — the fetches aborted and Picmo rejected with a bare IDB error
  // Event, leaving "Failed to load emojis" behind.
  const getPicker = () => {
    if (pickerRef.current) return pickerRef.current;
    const button = buttonRef.current;
    if (!button) return null;

    const picker = createPopup(
      {},
      {
        referenceElement: button,
        triggerElement: button,
        position,
        showCloseButton: false
      }
    );
    picker.addEventListener('emoji:select', (selection: { emoji: string }) =>
      handler.current?.(selection.emoji)
    );
    pickerRef.current = picker;
    return picker;
  };

  useEffect(
    () => () => {
      const picker = pickerRef.current;
      pickerRef.current = null;
      if (!picker) return;
      // `destroy()` reaches into internals that only exist once Picmo has
      // rendered; swallow both the synchronous throw and the rejected promise.
      try {
        const teardown = picker.destroy() as unknown;
        if (teardown instanceof Promise) teardown.catch(() => {});
      } catch {
        /* never finished initialising */
      }
    },
    []
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      className={cn(className)}
      onClick={() => getPicker()?.toggle()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default EmojiPickerButton;
