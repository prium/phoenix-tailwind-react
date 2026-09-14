import {
  createContext,
  Dispatch,
  PropsWithChildren,
  use,
  useCallback,
  useEffect,
  useReducer,
  useState
} from 'react';
import { useThemeMode } from '@hummingbirdui/react';
import { getColor, getItemFromStore } from 'helpers/utils';
import { Config, ThemeVariant, initialConfig } from 'config';
import { ACTIONTYPE, configReducer, SET_CONFIG } from 'reducers/ConfigReducer';

interface AppContextInterFace {
  config: Config;
  configDispatch: Dispatch<ACTIONTYPE>;
  /** Flip between light and dark, ignoring `auto`. */
  toggleTheme: () => void;
  /** Set the colour scheme. `auto` follows the OS. */
  setTheme: (theme: ThemeVariant) => void;
  /**
   * The theme actually painted: `auto` resolved to light or dark, or the
   * scheme a page has pinned. Branch colour decisions on this (or
   * `config.isDark`), never on `config.theme`, which can read `auto`.
   */
  computedTheme: 'light' | 'dark';
  /**
   * Pin the painted scheme without touching the visitor's stored choice, or
   * pass null to release it. Pages call this through `useForcedTheme`.
   */
  setForcedTheme: (theme: 'light' | 'dark' | null) => void;
  setConfig: (payload: Partial<Config>) => void;
  getThemeColor: (name: string) => string;
}

export const AppContext = createContext({} as AppContextInterFace);

const AppProvider = ({ children }: PropsWithChildren) => {
  /**
   * hb-react owns the colour scheme. `useThemeMode` is the single source of
   * truth: it persists the `theme` key, resolves `system` against
   * `prefers-color-scheme`, syncs across tabs (storage event) and within the
   * tab (its own document event), and suppresses transitions while switching.
   * It writes `.dark` on <html>; the phoenix CSS keys on `[data-hb-theme]`,
   * so `useToggleStyle` mirrors the computed value onto that attribute and
   * `index.css` teaches the `dark:` variant to accept either.
   *
   * hb-react calls the follow-the-OS mode `system`; the settings panel and
   * the gold call it `auto`. That is the only translation here.
   */
  const { mode, computedMode, setMode, toggleMode } = useThemeMode();
  const theme: ThemeVariant = mode === 'system' ? 'auto' : mode;

  /**
   * A page whose design is one scheme (the showcase, like the gold's
   * LayoutShowcase) pins what is painted here instead of calling `setTheme`.
   * `setTheme` persists: it would sync the pin to every other open tab, and a
   * reload away from the page would leave the visitor's choice overwritten.
   */
  const [forcedTheme, setForcedTheme] = useState<'light' | 'dark' | null>(null);
  const paintedTheme = forcedTheme ?? computedMode;

  // useThemeMode writes `.dark` from its own computed mode. Declared after the
  // hook, this runs after it in the same effect flush, so a pinned scheme wins
  // even on a direct load, and is re-asserted if another tab changes the mode.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', paintedTheme === 'dark');
  }, [paintedTheme, computedMode]);

  const setTheme = useCallback(
    (next: ThemeVariant) => setMode(next === 'auto' ? 'system' : next),
    [setMode]
  );

  const configState: Config = {
    isNavbarVerticalCollapsed: getItemFromStore(
      'isNavbarVerticalCollapsed',
      initialConfig.isNavbarVerticalCollapsed
    ),
    openNavbarVertical: initialConfig.openNavbarVertical,
    theme,
    navbarTopAppearance: getItemFromStore(
      'navbarTopAppearance',
      initialConfig.navbarTopAppearance
    ),
    navbarVerticalAppearance: getItemFromStore(
      'navbarVerticalAppearance',
      initialConfig.navbarVerticalAppearance
    ),
    navbarPosition: getItemFromStore(
      'navbarPosition',
      initialConfig.navbarPosition
    ),
    navbarTopShape: getItemFromStore(
      'navbarTopShape',
      initialConfig.navbarTopShape
    ),
    isRTL: getItemFromStore('isRTL', initialConfig.isRTL),
    isDark: paintedTheme === 'dark',
    isChatWidgetVisible: getItemFromStore(
      'isChatWidgetVisible',
      initialConfig.isChatWidgetVisible
    )
  };

  const [config, configDispatch] = useReducer(configReducer, configState);

  const setConfig = (payload: Partial<Config>) => {
    configDispatch({
      type: SET_CONFIG,
      payload
    });
  };

  const toggleTheme = toggleMode;

  // keep the mirrored copies in config in step with hb-react's state, so the
  // charts and maps reading `config.isDark` still see one consistent value
  useEffect(() => {
    const isDark = paintedTheme === 'dark';
    if (config.theme === theme && config.isDark === isDark) return;
    configDispatch({ type: SET_CONFIG, payload: { theme, isDark } });
  }, [theme, paintedTheme, config.theme, config.isDark]);

  const getThemeColor = (name: string) => {
    return getColor(name);
  };

  // Handle DOM attribute updates
  useEffect(() => {
    if (config.navbarTopShape === 'slim') {
      document.documentElement.setAttribute(
        'data-navbar-horizontal-shape',
        'slim'
      );
    } else {
      document.documentElement.removeAttribute('data-navbar-horizontal-shape');
    }

    document.documentElement.setAttribute(
      'data-navigation-type',
      config.navbarPosition
    );

    if (config.isNavbarVerticalCollapsed) {
      document.documentElement.classList.add('navbar-vertical-collapsed');
    } else {
      document.documentElement.classList.remove('navbar-vertical-collapsed');
    }
  }, [
    config.navbarTopShape,
    config.navbarPosition,
    config.isNavbarVerticalCollapsed
  ]);

  // Separate useEffect to fix navbarTopShape if needed
  useEffect(() => {
    if (
      config.navbarPosition === 'dual' &&
      config.navbarTopShape !== 'default'
    ) {
      setConfig({ navbarTopShape: 'default' });
    }
  }, [config.navbarPosition, config.navbarTopShape]);

  return (
    <AppContext
      value={{
        config,
        setConfig,
        toggleTheme,
        setTheme,
        computedTheme: paintedTheme,
        setForcedTheme,
        getThemeColor,
        configDispatch
      }}
    >
      {children}
    </AppContext>
  );
};

export const useAppContext = () => use(AppContext);

export default AppProvider;
