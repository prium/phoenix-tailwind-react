import { RefObject, useLayoutEffect, useRef, useState } from 'react';

/** Hummingbird's `components/transitions.css` gives `.collapsing` 300ms. */
const DURATION_MS = 300;

/**
 * Bootstrap's collapse transition, reproduced on the gold's own markup.
 *
 * `NavbarVertical.pug` drives its submenus with Bootstrap's Collapse plugin,
 * which swaps `.collapse.show` for `.collapsing` and animates an inline height
 * between 0 and the content height. Toggling `.show` from React alone lands on
 * the end state in one frame, so the menu opened with no animation at all.
 *
 * Returns the ref to put on the collapsing element plus the flag that selects
 * between the `.collapsing` and `.collapse` class, so React still owns
 * `className` and a re-render mid-transition cannot fight the DOM.
 */
const useCollapseTransition = <T extends HTMLElement>(isOpen: boolean) => {
  const ref = useRef<T>(null);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const prevOpen = useRef(isOpen);

  // Enter the transition only on a real change, so the menu that the current
  // route opens is already expanded on first paint (as it is in the gold).
  useLayoutEffect(() => {
    if (prevOpen.current === isOpen) return;
    prevOpen.current = isOpen;
    setIsCollapsing(true);
  }, [isOpen]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!isCollapsing || !el) return;

    // By the time this runs the element already carries `.collapsing`, whose
    // `height: 0` is therefore the computed value in *both* directions. So pin
    // the start value with transitions suppressed — otherwise closing animates
    // from 0 to 0 and looks like no animation at all — then release it.
    const contentHeight = `${el.scrollHeight}px`;
    el.style.transition = 'none';
    el.style.height = isOpen ? '0px' : contentHeight;
    void el.offsetHeight;
    el.style.transition = '';
    el.style.height = isOpen ? contentHeight : '';

    const timer = window.setTimeout(() => {
      // Height must go back to auto: when the sidenav itself is collapsed the
      // same `ul` is reused as a hover fly-out and an inline height clips it.
      el.style.height = '';
      el.style.transition = '';
      setIsCollapsing(false);
    }, DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [isCollapsing, isOpen]);

  return { ref: ref as RefObject<T | null>, isCollapsing };
};

export default useCollapseTransition;
