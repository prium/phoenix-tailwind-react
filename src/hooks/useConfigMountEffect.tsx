/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Config, initialConfig } from 'config';
import { useAppContext } from 'providers/AppProvider';
import { useEffect } from 'react';

/**
 * Applies config overrides for as long as a page is mounted (the layout demo
 * routes), restoring the defaults on the way out.
 *
 * `theme` is handled separately: it is no longer stored in the config reducer
 * but owned by hb-react's `useThemeMode`, so it has to go through `setTheme`
 * or the mirror in AppProvider immediately overwrites it. Unlike the other
 * keys it is restored to whatever was active before the page mounted rather
 * than to `initialConfig`, so visiting the dark-mode demo cannot silently
 * discard the visitor's own colour scheme — which is now persisted for real.
 */
const useConfigMountEffect = (effects: Partial<Config>) => {
  const { config, setConfig, setTheme } = useAppContext();
  useEffect(() => {
    const { theme, ...rest } = effects;
    const previousTheme = config.theme;

    if (theme) setTheme(theme);
    setConfig(rest);

    return () => {
      if (theme) setTheme(previousTheme);

      const undoEffects = Object.keys(rest).reduce((acc, effect) => {
        // @ts-ignore
        acc[effect] = initialConfig[effect as keyof Config];
        return acc;
      }, {} as Partial<Config>);

      setConfig(undoEffects);
    };
  }, []);
};

export default useConfigMountEffect;
