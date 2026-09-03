import { useAppContext } from 'providers/AppProvider';
import { useEffect, useLayoutEffect } from 'react';
import is from 'is_js';
import { REFRESH } from 'reducers/ConfigReducer';

/**
 * Mirrors the app config onto <html>:
 *  - browser classes (windows / chrome / osx …)
 *  - `dir` for RTL (styles use logical properties, no separate stylesheet)
 *  - `data-hb-theme` for dark mode
 *
 * The colour scheme itself is owned by hb-react's `useThemeMode`, called once
 * in AppProvider. That hook writes `.dark` on <html>; the copied phoenix CSS
 * keys on `[data-hb-theme=dark]`, so the computed mode is mirrored onto that
 * attribute here and `index.css` teaches the `dark:` variant to accept either.
 * Mirroring rather than rewriting the selector keeps assets/css a verbatim
 * copy of the gold (see SOURCE.md).
 *
 * The REFRESH dispatch after a theme change forces consumers that read design
 * tokens imperatively (charts, the Leaflet tile filter) to re-read them via
 * getColor().
 */
const useToggleStyle = () => {
  const {
    config: { isRTL },
    computedTheme,
    configDispatch
  } = useAppContext();

  const html = document.documentElement;

  useEffect(() => {
    const classList = html.classList;
    if (is.windows()) classList.add('windows');
    if (is.chrome()) classList.add('chrome');
    if (is.firefox()) classList.add('firefox');
    if (is.safari()) classList.add('safari');
    if (is.mac()) classList.add('osx');
    if (is.ipad()) classList.add('ipad');
  }, []);

  useLayoutEffect(() => {
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

  useLayoutEffect(() => {
    html.setAttribute('data-hb-theme', computedTheme);
    configDispatch({ type: REFRESH });
  }, [computedTheme]);
};

export default useToggleStyle;
