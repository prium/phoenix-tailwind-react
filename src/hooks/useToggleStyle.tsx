import { useAppContext } from 'providers/AppProvider';
import { useEffect, useLayoutEffect } from 'react';
import is from 'is_js';
import { REFRESH, SET_CONFIG } from 'reducers/ConfigReducer';
import { getSystemTheme } from 'helpers/utils';

/**
 * Mirrors the app config onto <html>:
 *  - browser classes (windows / chrome / osx …)
 *  - `dir` for RTL (styles use logical properties, no separate stylesheet)
 *  - `data-hb-theme` for dark mode (the selector used by assets/css)
 * The REFRESH dispatch after a theme change forces consumers (charts, maps)
 * to re-read design tokens via getColor().
 */
const useToggleStyle = () => {
  const {
    config: { theme, isRTL },
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
    const applyTheme = () => {
      const mode = theme === 'auto' ? getSystemTheme() : theme;
      configDispatch({
        type: SET_CONFIG,
        payload: { isDark: mode === 'dark' }
      });
      html.setAttribute('data-hb-theme', mode);
      configDispatch({ type: REFRESH });
    };

    applyTheme();

    if (theme !== 'auto') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [theme]);
};

export default useToggleStyle;
