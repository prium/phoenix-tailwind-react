import { useAppContext } from 'providers/AppProvider';
import { useLayoutEffect } from 'react';

/**
 * Paints one colour scheme for as long as the calling page is mounted, without
 * writing the visitor's stored choice — the React counterpart of the inline
 * `data-hb-theme` the gold sets in layouts like LayoutShowcase.
 *
 * `computedTheme` and `config.isDark` report the pinned scheme while it holds;
 * `config.theme` keeps reporting what the visitor picked. Add the route to the
 * pre-paint check in `index.html` as well, or a direct load paints the stored
 * scheme for a frame before this runs.
 */
const useForcedTheme = (theme: 'light' | 'dark') => {
  const { setForcedTheme } = useAppContext();

  useLayoutEffect(() => {
    setForcedTheme(theme);
    return () => setForcedTheme(null);
  }, [theme, setForcedTheme]);
};

export default useForcedTheme;
