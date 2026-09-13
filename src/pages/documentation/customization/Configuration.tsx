import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Link } from 'react-router';
import { PropsWithChildren, ReactNode } from 'react';

const configFileCode = `
// src/config.ts
export type ThemeVariant = 'light' | 'dark' | 'auto';
export type NavPositionVariant = 'horizontal' | 'vertical' | 'combo' | 'dual';
export type NavTopShapeVariant = 'default' | 'slim';
export type NavbarAppearanceVariant = 'default' | 'darker';

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: false,
  openNavbarVertical: false, // for responsive
  theme: 'light',
  navbarTopAppearance: 'default',
  navbarVerticalAppearance: 'default',
  navbarPosition: 'vertical',
  navbarTopShape: 'default',
  isRTL: false,
  isDark: false,
  isChatWidgetVisible: true
};
`;

const contextCode = `
import { useAppContext } from 'providers/AppProvider';

const NavigationSwitch = () => {
  const { config, setConfig } = useAppContext();

  return (
    <button
      className="btn btn-phoenix-primary"
      onClick={() =>
        setConfig({ navbarPosition: 'horizontal', navbarTopShape: 'slim' })
      }
    >
      Current position: {config.navbarPosition}
    </button>
  );
};
`;

const dispatchCode = `
import { useAppContext } from 'providers/AppProvider';
import { RESET, REFRESH, SET_CONFIG } from 'reducers/ConfigReducer';

const { configDispatch } = useAppContext();

// same as setConfig(payload)
configDispatch({ type: SET_CONFIG, payload: { isRTL: true } });

// new state object, same values: re-renders every consumer so that charts and
// maps re-read the design tokens through getThemeColor()
configDispatch({ type: REFRESH });

// localStorage.clear() + back to initialConfig ("Reset to default" button)
configDispatch({ type: RESET });
`;

const themeColorCode = `
import { useAppContext } from 'providers/AppProvider';

const { getThemeColor } = useAppContext();

// reads --color-primary off <html> at call time, so the value follows the
// active theme. Token names come from src/assets/css/theme.css.
const primary = getThemeColor('color-primary');
const gridLine = getThemeColor('border-color-default');
`;

const mountEffectCode = `
// src/pages/pages/layouts/Darknav.tsx
import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Darknav = () => {
  // lock the settings-panel controls this demo does not allow
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  // applied on mount, restored to the initialConfig value on unmount
  useConfigMountEffect({
    navbarVerticalAppearance: 'darker',
    navbarTopAppearance: 'darker'
  });

  return <Ecommerce />;
};
`;

interface OptionRowProps {
  option: string;
  type: ReactNode;
  defaultValue: ReactNode;
  /** `true` / `false` for the reducer, or a note when someone else owns it. */
  stored: boolean | string;
}

const OptionRow = ({
  option,
  type,
  defaultValue,
  stored,
  children
}: PropsWithChildren<OptionRowProps>) => (
  <tr>
    <td className="whitespace-nowrap">{option}</td>
    <td>{type}</td>
    <td className="whitespace-nowrap">{defaultValue}</td>
    <td className="whitespace-nowrap">
      {typeof stored === 'string' ? stored : stored ? 'yes' : 'no'}
    </td>
    <td>{children}</td>
  </tr>
);

const Configuration = () => {
  return (
    <div>
      <DocPageHeader
        title="Configuration"
        description="One object decides how the shell looks: navigation type, navbar shape and appearance, colour scheme, text direction and the support chat."
      >
        <p className="mb-0 text-muted">
          The object lives in <code>src/config.ts</code>, is held in a reducer
          behind the <code>useAppContext</code> hook, and the values a visitor
          changes are written to <code>localStorage</code> so they survive a
          reload.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="The config file" noPreview>
            <p className="mb-0">
              <code>src/config.ts</code> exports the <code>Config</code> type
              and <code>initialConfig</code>, the defaults used for a visitor
              who has nothing stored yet. Editing a value here changes the
              first-load behaviour of the whole app.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={configFileCode} />
            <p className="mb-0 mt-4 text-muted">
              A default only wins while the matching <code>localStorage</code>{' '}
              key is absent. If you have already used the settings panel in this
              browser, clear the storage — or press{' '}
              <strong>Reset to default</strong> in the panel — before checking a
              changed default.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Available options" noPreview>
            <p className="mb-0">
              Every key of <code>Config</code>. <em>Stored</em> says whether{' '}
              <code>setConfig</code> writes the key to <code>localStorage</code>{' '}
              under its own name.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Option</th>
                    <th className="whitespace-nowrap">Values</th>
                    <th className="whitespace-nowrap">Default</th>
                    <th className="whitespace-nowrap">Stored</th>
                    <th className="whitespace-nowrap min-w-80">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <OptionRow
                    option="isNavbarVerticalCollapsed"
                    type={<code>boolean</code>}
                    defaultValue={<code>false</code>}
                    stored
                  >
                    Start with the vertical navbar collapsed to its icon rail.
                    Adds <code>.navbar-vertical-collapsed</code> to{' '}
                    <code>&lt;html&gt;</code>; the{' '}
                    <strong>Collapsed View</strong> button in the navbar footer
                    toggles it.
                  </OptionRow>

                  <OptionRow
                    option="openNavbarVertical"
                    type={<code>boolean</code>}
                    defaultValue={<code>false</code>}
                    stored={false}
                  >
                    Runtime-only flag for small screens <code>(sm to lg)</code>:
                    it opens the vertical navbar as a drawer. The hamburger
                    button drives it, and it is deliberately not persisted —
                    every reload starts closed.
                  </OptionRow>

                  <OptionRow
                    option="theme"
                    type={
                      <code>
                        &apos;light&apos; | &apos;dark&apos; | &apos;auto&apos;
                      </code>
                    }
                    defaultValue={<code>&apos;light&apos;</code>}
                    stored="yes, elsewhere"
                  >
                    The colour scheme; <code>auto</code> follows the operating
                    system. It is the one key the config reducer does not
                    persist itself — hb-react&apos;s <code>useThemeMode</code>{' '}
                    owns the <code>theme</code> entry in{' '}
                    <code>localStorage</code>. The resolved value is applied as{' '}
                    <code>data-hb-theme</code> on <code>&lt;html&gt;</code>,
                    which is what the stylesheets key on. See{' '}
                    <Link to="/documentation/customization/dark-mode">
                      Dark mode
                    </Link>{' '}
                    for the runtime.
                  </OptionRow>

                  <OptionRow
                    option="navbarPosition"
                    type={
                      <code>
                        &apos;vertical&apos; | &apos;horizontal&apos; |
                        &apos;combo&apos; | &apos;dual&apos;
                      </code>
                    }
                    defaultValue={<code>&apos;vertical&apos;</code>}
                    stored
                  >
                    Which navigation the layout renders. Mirrored to{' '}
                    <code>data-navigation-type</code> on{' '}
                    <code>&lt;html&gt;</code>, which the CSS uses to size the
                    content area.
                  </OptionRow>

                  <OptionRow
                    option="navbarTopShape"
                    type={<code>&apos;default&apos; | &apos;slim&apos;</code>}
                    defaultValue={<code>&apos;default&apos;</code>}
                    stored
                  >
                    <code>slim</code> sets{' '}
                    <code>data-navbar-horizontal-shape=&quot;slim&quot;</code>{' '}
                    on <code>&lt;html&gt;</code>, which drops{' '}
                    <code>--navbar-top-height</code> from 4rem to 1.7rem. Forced
                    back to <code>default</code> while{' '}
                    <code>navbarPosition</code> is <code>dual</code>.
                  </OptionRow>

                  <OptionRow
                    option="navbarTopAppearance"
                    type={<code>&apos;default&apos; | &apos;darker&apos;</code>}
                    defaultValue={<code>&apos;default&apos;</code>}
                    stored
                  >
                    <code>darker</code> puts{' '}
                    <code>data-navbar-appearance=&quot;darker&quot;</code> on
                    the top navbar element — darker in light mode, lighter in
                    dark mode.
                  </OptionRow>

                  <OptionRow
                    option="navbarVerticalAppearance"
                    type={<code>&apos;default&apos; | &apos;darker&apos;</code>}
                    defaultValue={<code>&apos;default&apos;</code>}
                    stored
                  >
                    The same attribute on the vertical navbar element. Has no
                    effect when <code>navbarPosition</code> is{' '}
                    <code>horizontal</code> or <code>dual</code>, so the
                    settings panel disables the control there.
                  </OptionRow>

                  <OptionRow
                    option="isRTL"
                    type={<code>boolean</code>}
                    defaultValue={<code>false</code>}
                    stored
                  >
                    Sets <code>dir=&quot;rtl&quot;</code> on{' '}
                    <code>&lt;html&gt;</code>. There is no separate RTL
                    stylesheet — the CSS uses logical properties, so the one
                    attribute flips the layout.
                  </OptionRow>

                  <OptionRow
                    option="isChatWidgetVisible"
                    type={<code>boolean</code>}
                    defaultValue={<code>true</code>}
                    stored
                  >
                    Shows the support chat bubble by adding <code>.show</code>{' '}
                    to <code>.support-chat-container</code>. Set{' '}
                    <code>false</code> to keep it out of the corner.
                  </OptionRow>

                  <OptionRow
                    option="isDark"
                    type={<code>boolean</code>}
                    defaultValue={<code>false</code>}
                    stored={false}
                  >
                    Derived, not authored: it is <code>theme</code> resolved to
                    an actual mode (<code>auto</code> included). Charts read it
                    to pick a palette. Set <code>theme</code>, never this.
                  </OptionRow>
                </tbody>
              </table>
            </div>
            <p className="mb-0 mt-4 text-muted">
              <code>Config</code> also declares an optional{' '}
              <code>bodyClass</code>. Nothing in the app reads it today; treat
              it as reserved.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reading and updating" noPreview>
            <p className="mb-0">
              <code>src/providers/AppProvider.tsx</code> holds the config in a{' '}
              <code>useReducer</code> and publishes it through React context.
              Anywhere below it, <code>useAppContext()</code> gives you the
              current <code>config</code> and a <code>setConfig</code> that
              takes a partial object.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={contextCode} />
            <p className="mb-2 mt-6">
              <code>setConfig</code> is a thin wrapper over{' '}
              <code>configDispatch</code>, which is also exposed for the two
              actions that have no payload (
              <code>src/reducers/ConfigReducer.ts</code>).
            </p>
            <PhoenixLiveEditor code={dispatchCode} />
            <p className="mb-2 mt-6">
              The context also carries <code>getThemeColor</code>, a wrapper
              around <code>getColor</code> from <code>helpers/utils</code>: it
              reads a CSS custom property off <code>&lt;html&gt;</code>, so
              charts and maps can take their colours from the active theme
              instead of hardcoding hex values. In dev it warns when a token
              name does not resolve.
            </p>
            <PhoenixLiveEditor code={themeColorCode} />
            <p className="mb-0 mt-6 text-muted">
              Theme-specific members (<code>toggleTheme</code>,{' '}
              <code>setTheme</code>, <code>computedTheme</code>) belong to the
              colour-scheme runtime and are documented on{' '}
              <Link to="/documentation/customization/dark-mode">Dark mode</Link>
              .
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Persistence" noPreview>
            <p className="mb-0">
              On every <code>SET_CONFIG</code> the reducer writes the changed
              keys to <code>localStorage</code> through{' '}
              <code>setItemToStore</code>; <code>AppProvider</code> reads them
              back with <code>getItemFromStore</code> when the app boots, using{' '}
              <code>initialConfig</code> as the fallback.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <ul className="mb-4">
              <li className="mb-2">
                <strong>Persisted by the reducer</strong> (one key each, same
                name as the option): <code>isRTL</code>,{' '}
                <code>isNavbarVerticalCollapsed</code>,{' '}
                <code>isChatWidgetVisible</code>, <code>navbarPosition</code>,{' '}
                <code>navbarTopShape</code>, <code>navbarTopAppearance</code>,{' '}
                <code>navbarVerticalAppearance</code>.
              </li>
              <li className="mb-2">
                <strong>Persisted elsewhere</strong>: <code>theme</code>, under
                the same key name, by hb-react&apos;s <code>useThemeMode</code>{' '}
                — the reducer skips it so the value is not written twice.
              </li>
              <li>
                <strong>Not persisted</strong>: <code>openNavbarVertical</code>{' '}
                (the responsive drawer state, always starts closed) and{' '}
                <code>isDark</code> (derived from <code>theme</code> on every
                load).
              </li>
            </ul>
            <p className="mb-4">
              Values are stored as strings (<code>String(value)</code>) and read
              back through <code>JSON.parse</code>, falling back to the raw
              string when that throws — so <code>true</code> comes back as a
              boolean and <code>&apos;vertical&apos;</code> as a string.
            </p>
            <p className="mb-0">
              <code>RESET</code> calls <code>localStorage.clear()</code> and
              returns <code>initialConfig</code>. It clears the whole origin,
              not only the config keys, so keep that in mind if you add storage
              of your own.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="What lands on the DOM" noPreview>
            <p className="mb-0">
              The stylesheets never read the config; they react to attributes
              and classes. <code>AppProvider</code> and{' '}
              <code>hooks/useToggleStyle</code> write them.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Config</th>
                    <th className="whitespace-nowrap">Written as</th>
                    <th className="whitespace-nowrap">On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap">theme</td>
                    <td>
                      <code>data-hb-theme=&quot;light|dark&quot;</code>, plus
                      the <code>.dark</code> class hb-react manages
                    </td>
                    <td>
                      <code>&lt;html&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">isRTL</td>
                    <td>
                      <code>dir=&quot;rtl|ltr&quot;</code>
                    </td>
                    <td>
                      <code>&lt;html&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">navbarPosition</td>
                    <td>
                      <code>data-navigation-type</code>
                    </td>
                    <td>
                      <code>&lt;html&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">navbarTopShape</td>
                    <td>
                      <code>data-navbar-horizontal-shape=&quot;slim&quot;</code>{' '}
                      (removed when default)
                    </td>
                    <td>
                      <code>&lt;html&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      isNavbarVerticalCollapsed
                    </td>
                    <td>
                      <code>.navbar-vertical-collapsed</code>
                    </td>
                    <td>
                      <code>&lt;html&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      navbarTopAppearance / navbarVerticalAppearance
                    </td>
                    <td>
                      <code>data-navbar-appearance=&quot;darker&quot;</code>
                    </td>
                    <td>the navbar element</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">isChatWidgetVisible</td>
                    <td>
                      <code>.show</code>
                    </td>
                    <td>
                      <code>.support-chat-container</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-0 mt-4 text-muted">
              <code>index.html</code> runs a small inline script before React
              mounts that applies the stored <code>theme</code>,{' '}
              <code>isRTL</code> and <code>isNavbarVerticalCollapsed</code> to{' '}
              <code>&lt;html&gt;</code>, so a dark or RTL session does not flash
              light and LTR on the first paint. <code>useToggleStyle</code> also
              tags <code>&lt;html&gt;</code> with browser classes (
              <code>windows</code>, <code>chrome</code>, <code>osx</code>…) that
              a few rules key on.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Per-page overrides" noPreview>
            <p className="mb-0">
              A page can demand a configuration while it is mounted.{' '}
              <code>useConfigMountEffect</code> applies a partial config on
              mount and restores those keys to their <code>initialConfig</code>{' '}
              values on unmount; <code>useSettingsMountEffect</code> does the
              same for the settings panel, disabling controls that do not apply.
              The layout demos under <code>src/pages/pages/layouts</code> are
              built from the two.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={mountEffectCode} />
            <p className="mb-0 mt-4 text-muted">
              Because the restore path goes through <code>setConfig</code>, it
              also rewrites the persisted values — leaving a layout demo puts
              the stored keys back to the defaults rather than to whatever you
              had picked before.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="The settings panel" noPreview>
            <p className="mb-0">
              The panel in <code>src/components/settings-panel</code> is the
              only UI that writes the config. Each control maps to exactly one
              key.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Control</th>
                    <th className="whitespace-nowrap">Component</th>
                    <th className="whitespace-nowrap">Writes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap">Color Scheme</td>
                    <td>
                      <code>ColorScheme</code>
                    </td>
                    <td>
                      <code>theme</code> (light / dark / auto), through{' '}
                      <code>setTheme</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">RTL</td>
                    <td>
                      <code>RTLMode</code>
                    </td>
                    <td>
                      <code>isRTL</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Support Chat</td>
                    <td>
                      <code>ChatWidgetVisibility</code>
                    </td>
                    <td>
                      <code>isChatWidgetVisible</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Navigation Type</td>
                    <td>
                      <code>NavigationType</code>
                    </td>
                    <td>
                      <code>navbarPosition</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      Vertical Navbar Appearance
                    </td>
                    <td>
                      <code>VerticalNavbarAppearance</code>
                    </td>
                    <td>
                      <code>navbarVerticalAppearance</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      Horizontal Navbar Shape
                    </td>
                    <td>
                      <code>HorizontalNavbarShape</code>
                    </td>
                    <td>
                      <code>navbarTopShape</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      Horizontal Navbar Appearance
                    </td>
                    <td>
                      <code>TopNavbarAppearance</code>
                    </td>
                    <td>
                      <code>navbarTopAppearance</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Reset to default</td>
                    <td>
                      <code>SettingsPanel</code>
                    </td>
                    <td>
                      <code>RESET</code> — clears storage, reloads{' '}
                      <code>initialConfig</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-0 mt-4 text-muted">
              <code>SettingsPanelProvider</code> keeps the panel honest:
              choosing <code>horizontal</code> or <code>dual</code> disables the
              vertical navbar appearance, and <code>dual</code> also disables
              the horizontal navbar shape. There is no panel control for{' '}
              <code>isNavbarVerticalCollapsed</code> (the navbar&apos;s own
              arrow button) or <code>openNavbarVertical</code> (the hamburger).
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default Configuration;
