import { useBreakpoints } from 'providers/BreakpointsProvider';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

/**
 * Open/close behaviour of phoenix-tailwind's top-nav dropdowns
 * (`dropdown-on-hover.js` + bootstrap `data-bs-auto-close="outside"`):
 * hover opens/closes at ≥ lg, click toggles, outside click and route change close.
 */
const useTopNavDropdown = <T extends HTMLElement>(hover = true) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<T>(null);
  const { breakpoints } = useBreakpoints();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const hoverEnabled = hover && breakpoints.up('lg');

  const toggleProps = {
    'aria-expanded': open,
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      // hover already opened it on desktop — a click keeps it open (mouseleave closes)
      setOpen(o => (hoverEnabled ? true : !o));
    }
  };

  const containerProps = {
    ref,
    onMouseEnter:
      hover && breakpoints.up('lg') ? () => setOpen(true) : undefined,
    onMouseLeave:
      hover && breakpoints.up('lg') ? () => setOpen(false) : undefined
  };

  return { open, setOpen, toggleProps, containerProps };
};

export default useTopNavDropdown;
