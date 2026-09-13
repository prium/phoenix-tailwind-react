import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';
import ThemeToggler from 'components/common/ThemeToggler';
import ThemeDropdown from 'components/docs/ThemeDropdown';

const readingCode = `
// anywhere inside AppProvider
const { config: { theme, isDark }, computedTheme, setTheme, toggleTheme } =
  useAppContext();

// theme         'light' | 'dark' | 'auto'   what the user picked
// computedTheme 'light' | 'dark'            what is actually painted
// isDark        boolean                     shorthand for computedTheme === 'dark'

setTheme('dark');    // pick a scheme
setTheme('auto');    // follow the operating system
toggleTheme();       // flip between light and dark
`;

const togglerCode = `
<div className="flex items-center gap-6">
  <ThemeToggler />
  <ThemeDropdown />
</div>
`;

const checkboxCode = `
const DarkModeChecks = () => {
  const { config: { isDark }, setTheme } = useAppContext();
  return (
    <div className="flex gap-10">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeCheck"
          checked={isDark}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <label className="form-check-label text-base text-default" htmlFor="darkModeCheck">
          Dark mode
        </label>
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="darkModeSwitch"
          checked={isDark}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <label className="form-check-label text-base text-default" htmlFor="darkModeSwitch">
          Dark mode
        </label>
      </div>
    </div>
  );
};

render(<DarkModeChecks />);
`;

const radioCode = `
const ColourSchemeRadios = () => {
  const { config: { theme }, setTheme } = useAppContext();
  return (
    <div className="flex gap-6">
      {['light', 'dark', 'auto'].map(value => (
        <div className="form-check form-check-inline" key={value}>
          <input
            className="form-check-input"
            type="radio"
            name="colourScheme"
            id={\`scheme-\${value}\`}
            checked={theme === value}
            onChange={() => setTheme(value)}
          />
          <label className="form-check-label text-base text-default capitalize" htmlFor={\`scheme-\${value}\`}>
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};

render(<ColourSchemeRadios />);
`;

const stylingCode = `
<div className="flex flex-col gap-4">
  {/* dark: works on any utility */}
  <div className="bg-soft dark:bg-subtle text-default p-4 rounded-lg">
    bg-soft dark:bg-subtle
  </div>

  {/* semantic tokens flip on their own — no dark: needed */}
  <p className="text-muted bg-default p-4 rounded-lg mb-0">
    text-muted bg-default
  </p>
</div>
`;

const cssCode = `
/* in your own CSS, use the same variant hummingbird uses */
.my-panel {
  background: var(--color-white);

  @variant dark {
    background: var(--color-gray-1000);
  }
}
`;

const DarkMode = () => {
  return (
    <div>
      <DocPageHeader
        title="Dark mode"
        description="The colour scheme is owned by hb-react's useThemeMode. It persists the choice, resolves auto against the operating system, and keeps every tab in step."
        link={{
          text: 'Hummingbird dark mode',
          url: 'https://react.hbui.dev/docs/customize/dark-mode/'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="How it works">
            <p className="mb-2">
              <code>useThemeMode</code> is called once, in{' '}
              <code>AppProvider</code>. It stores the choice under the{' '}
              <code>theme</code> key in <code>localStorage</code> —{' '}
              <code>light</code> or <code>dark</code>, with the key{' '}
              <strong>removed</strong> for <code>auto</code>, which is how it
              records &ldquo;follow the OS&rdquo;. It writes a{' '}
              <code>.dark</code> class on <code>&lt;html&gt;</code>.
            </p>
            <p className="mb-2">
              The phoenix stylesheet keys its dark rules on{' '}
              <code>[data-hb-theme=&quot;dark&quot;]</code>, so{' '}
              <code>useToggleStyle</code> mirrors the computed mode onto that
              attribute, and <code>index.css</code> defines the{' '}
              <code>dark:</code> variant to accept <em>either</em> selector.
              That is why hb-react&apos;s own <code>DarkThemeToggle</code> works
              here as well as the components on this page. The mirror exists
              because everything in <code>assets/css</code> except{' '}
              <code>index.css</code> is a verbatim copy of the design source —
              changing 16 files to <code>.dark</code> would break the re-sync.
            </p>
            <p className="mb-0">
              A small script in <code>index.html</code> applies the stored
              scheme before the first paint, so there is no flash of the wrong
              theme. It follows the same contract as the hook and sets both the
              class and the attribute.
            </p>
          </PhoenixDocCard.Header>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reading and setting the theme">
            <p className="mb-0">
              Everything goes through <code>useAppContext</code>. Always set the
              scheme with <code>setTheme</code> or <code>toggleTheme</code> —
              writing <code>setConfig(&#123; theme &#125;)</code> will not
              stick, because <code>config.theme</code> is a mirror of the
              hook&apos;s state rather than the source of truth.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={readingCode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Built-in controls">
            <p className="mb-0">
              <code>ThemeToggler</code> is the navbar control; the settings
              panel offers the same three choices under Color Scheme. Both, and
              the dropdown beside it, write through the same{' '}
              <code>setTheme</code>, so they never disagree.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={togglerCode}
            scope={{ ThemeToggler, ThemeDropdown }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Your own toggle">
            <p className="mb-0">
              Any control can drive it. Read <code>isDark</code> for a two-state
              control; these are live — the whole page follows.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={checkboxCode}
            scope={{ useAppContext }}
            noInline
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Offering auto">
            <p className="mb-0">
              Read <code>theme</code> rather than <code>isDark</code> when the
              control exposes all three choices, so <code>auto</code> stays
              distinguishable from the light or dark it currently resolves to.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={radioCode}
            scope={{ useAppContext }}
            noInline
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Styling for dark mode">
            <p className="mb-0">
              Prefer the semantic tokens — <code>text-default</code>,{' '}
              <code>text-muted</code>, <code>bg-soft</code>,{' '}
              <code>border-light</code> — which are re-pointed for dark mode and
              need no variant at all. Reach for <code>dark:</code> only when a
              value genuinely differs.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stylingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="In your own CSS">
            <p className="mb-0">
              Use <code>@variant dark</code> rather than writing a selector by
              hand. It resolves to whatever <code>index.css</code> defines, so
              your rule keeps working if that definition changes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={cssCode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reacting to a theme change in JavaScript">
            <p className="mb-0">
              Charts and the map read their colours imperatively through{' '}
              <code>getThemeColor</code>, which cannot see a CSS change. A{' '}
              <code>REFRESH</code> is dispatched after every switch so those
              components re-read their tokens; depend on <code>isDark</code> in
              the effect that builds your options and it happens for free. Note
              that a change can arrive from another tab, not just from a click
              in this one.
            </p>
          </PhoenixDocCard.Header>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DarkMode;
