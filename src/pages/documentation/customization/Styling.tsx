import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Link } from 'react-router';

const entryCode = `
/* src/assets/css/index.css — imported once, from src/main.tsx */

@import 'tailwindcss' theme(static);
@import '@hummingbirdui/react';
@import '@hummingbirdui/hummingbird/src/plugins/choices.css';

/* vendor stylesheets first, so the phoenix skins below can override them */
@import 'flatpickr/dist/flatpickr.css';
@import 'nouislider/dist/nouislider.css';
@import 'swiper/css/bundle';
@import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

@custom-variant dark (...);
@custom-variant active (&:active, &.active);

@import './theme.css';                    /* @theme design tokens */
@import './root.css';                     /* component CSS variables */
@import './helpers/background.css';       /* .bg-holder */
@import './components/component.css';     /* the phoenix skin, ~60 files */
@import './plugins/plugins.css';          /* skins for the vendor plugins */

@source not '../scss';                    /* legacy SCSS, never scanned */
`;

const layerCode = `
src/assets/css
├── index.css                 the only app-specific file
├── SOURCE.md                 which upstream commit the rest was copied from
├── theme.css                 @theme tokens + their dark-mode values
├── root.css                  :root component variables + their dark values
├── helpers/background.css    .bg-holder and its overlay/video variants
├── components/component.css  imports ~60 component files (card, buttons,
│                             navbar-*, table, timeline, kanban, ecommerce …)
└── plugins/plugins.css       imports the 16 plugin skins (flatpickr, swiper,
                              dropzone, leaflet, full-calendar, gantt …)
`;

const tokensCode = `
/* src/assets/css/theme.css (excerpt) */
@theme {
  --color-gray-50: #f5f7fa;
  ...
  --color-primary: var(--color-blue-500);
  --color-primary-subtle: var(--color-blue-100);

  --background-color-soft: var(--color-white);
  --background-color-default: var(--color-gray-50);

  --text-color-default: var(--color-gray-900);
  --text-color-muted: var(--color-gray-800);

  --border-color-default: var(--color-gray-300);
  --border-color-subtle: --alpha(var(--border-color-default) / 54%);
}

/* the same names, re-pointed for dark mode */
@layer theme {
  :root, :host {
    @variant dark {
      --background-color-default: #0f111a;
      --text-color-default: var(--color-gray-400);
      --color-primary: var(--color-blue-300);
      --border-color-default: #373e53;
    }
  }
}
`;

const getColorCode = `
import { useAppContext } from 'providers/AppProvider';

const { getThemeColor } = useAppContext();

// reads the custom property off <html>, so the value follows the active theme
getThemeColor('color-primary');            // --color-primary
getThemeColor('background-color-default'); // --background-color-default
getThemeColor('text-color-default');       // --text-color-default
getThemeColor('border-color-default');     // --border-color-default
`;

const phoenixButtonCode = `
<button className="btn btn-phoenix-primary">Phoenix Button</button>
`;

const hbUtilityCode = `
<div className="flex flex-wrap gap-2">
  <button className="btn btn-primary">Primary</button>
  <button className="btn btn-subtle-secondary">Secondary</button>
  <button className="btn btn-outline-success">Success</button>
  <button className="btn btn-text-info">Info</button>
</div>
`;

const tailwindUtilityCode = `
<div className="flex flex-wrap gap-2">
  <button className="btn btn-primary rounded-full">Pill Button</button>
  <button className="btn btn-subtle-secondary px-12 rounded-full hover:shadow-2xs">
    Wide Pill
  </button>
</div>
`;

const applyCode = `
/* a css file of your own, imported after the phoenix layers */
@utility btn-cta {
  @apply btn btn-primary rounded-full px-12;
}
`;

const globalVariableCode = `
/* raise the base radius and repoint the brand colour for the whole app */
@theme {
  --color-primary: var(--color-cyan-500);
  --color-primary-dark: var(--color-cyan-600);
  --input-btn-border-radius: var(--radius-lg);
}
`;

const localVariableCode = `
/* every button variant is just a set of --btn-* values; override them in a
   narrower scope to restyle one context only */
.card-footer .btn {
  --btn-bg: var(--background-color-highlight);
  --btn-color: var(--text-color-default);
  --btn-hover-bg: var(--background-color-muted);
  --btn-disabled-bg: var(--btn-bg);
  --btn-disabled-color: var(--text-color-soft);
}
`;

const ownStylesCode = `
/* src/assets/css/index.css — bottom of the file, after every phoenix import */

.report-canvas {
  background-color: var(--background-color-soft);
  border: 1px solid var(--border-color-default);

  @variant dark {
    background-color: var(--background-color-subtle);
  }
}
`;

const codemodCode = `
# rewrite one directory of Bootstrap class names to their Tailwind equivalent
npm run convert:tw -- src/pages/apps/e-commerce

# tools/bs2tw/
#   classMap.upstream.mjs  copied from phoenix-tailwind, never edited here
#   overrides.mjs          this app's additions, merged last
#   CONVERTED.md           every path already processed — check before running
`;

interface ScaleRowProps {
  name: string;
  px: string;
  note?: string;
}

const ScaleRow = ({ name, px, note }: ScaleRowProps) => (
  <tr>
    <td className="whitespace-nowrap">
      <code>text-{name}</code>
    </td>
    <td className="whitespace-nowrap">
      <code>--text-{name}</code>
    </td>
    <td className="whitespace-nowrap">{px}</td>
    <td>{note}</td>
  </tr>
);

const Styling = () => {
  return (
    <div>
      <DocPageHeader
        title="Styling"
        description="Tailwind CSS v4 with a CSS-first configuration: design tokens in @theme, a phoenix skin on top, and no build step of its own."
      >
        <p className="mb-0 text-muted">
          There is no SCSS and no <code>tailwind.config.js</code>. Everything
          the browser gets starts at <code>src/assets/css/index.css</code>,
          which <code>src/main.tsx</code> imports once.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="The entry file" noPreview>
            <p className="mb-0">
              <code>src/assets/css/index.css</code> is the only stylesheet this
              project owns. Its import order is the cascade order, and two lines
              of it are load-bearing.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={entryCode} />
            <ul className="mb-0 mt-6">
              <li className="mb-2">
                <code>@import &apos;tailwindcss&apos; theme(static)</code> —{' '}
                <code>static</code> keeps every <code>@theme</code> token in the
                generated CSS even when no utility references it. Charts and
                maps read their colours at runtime with <code>getColor()</code>;
                without <code>static</code> those custom properties would be
                tree-shaken away and the charts would paint black.
              </li>
              <li className="mb-2">
                The vendor stylesheets (flatpickr, noUiSlider, swiper, dhtmlx
                gantt) are imported <strong>before</strong> the phoenix layers,
                exactly as the static template loads them in{' '}
                <code>&lt;head&gt;</code>. Importing a plugin&apos;s CSS from a
                component file instead injects it after the skin, and the stock
                plugin theme wins.
              </li>
              <li className="mb-2">
                <code>@custom-variant dark</code> teaches the <code>dark:</code>{' '}
                variant which selector counts as dark mode. The copied CSS keys
                on <code>[data-hb-theme=&quot;dark&quot;]</code>; see{' '}
                <Link to="/documentation/customization/dark-mode">
                  Dark mode
                </Link>{' '}
                for the runtime that sets it.
              </li>
              <li className="mb-0">
                <code>@source not &apos;../scss&apos;</code> excludes the legacy{' '}
                <code>src/assets/scss</code> folder from Tailwind&apos;s class
                scanning. Those files are dead reference material — nothing
                imports them, and editing them has no effect.
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="The CSS is a copy" noPreview>
            <p className="mb-0">
              Read this before changing any stylesheet. Everything in{' '}
              <code>src/assets/css</code> except <code>index.css</code> is a{' '}
              <strong>verbatim copy</strong> of{' '}
              <code>../phoenix-tailwind/src/css</code>, the static template that
              this app is ported from.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <p>
              <code>src/assets/css/SOURCE.md</code> records the upstream commit
              the copy was taken at. A re-sync is a plain copy over the folder,
              so <strong>local edits to those files are lost</strong>. A fix
              that belongs to the theme has to be made upstream first, then
              copied down.
            </p>
            <p className="mb-2 font-semibold">The workflow</p>
            <ol className="mb-4">
              <li className="mb-1">
                Change the rule in <code>../phoenix-tailwind/src/css</code> and
                verify it against the static pages there.
              </li>
              <li className="mb-1">
                Copy the folder over <code>src/assets/css</code> (keeping{' '}
                <code>index.css</code>) and update the commit hash in{' '}
                <code>SOURCE.md</code>.
              </li>
              <li className="mb-0">
                Until the upstream change is committed, record it in{' '}
                <code>SOURCE.md</code> as a working-tree patch so the next
                re-sync does not silently drop it.
              </li>
            </ol>
            <p className="mb-0">
              That patch list is live: it currently carries the avatar sizing
              and <code>.avatar-emoji</code> fixes in{' '}
              <code>components/avatar.css</code> and the{' '}
              <code>focus-visible:ring-0</code> on{' '}
              <code>.form-check-input</code> in{' '}
              <code>components/forms.css</code>. Read <code>SOURCE.md</code>{' '}
              before assuming a rule is stock.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Layers" noPreview>
            <p className="mb-0">
              Five imports, in cascade order. Knowing which one owns a rule is
              usually enough to find it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={layerCode} />
            <ul className="mb-0 mt-6">
              <li className="mb-2">
                <code>theme.css</code> — the <code>@theme</code> block. These
                tokens generate utilities: <code>--color-primary</code> gives
                you <code>bg-primary</code>, <code>text-primary</code>,{' '}
                <code>border-primary</code>. A second block re-points the
                semantic tokens for dark mode; the raw palette (
                <code>--color-gray-*</code>, <code>--color-blue-*</code>…) stays
                the same in both themes.
              </li>
              <li className="mb-2">
                <code>root.css</code> — plain <code>:root</code> custom
                properties, <em>not</em> in <code>@theme</code>, so they
                generate no utilities. They are the knobs the component CSS
                reads: <code>--navbar-top-height</code>,{' '}
                <code>--navbar-vertical-width</code>,{' '}
                <code>--content-padding-x</code>, <code>--input-*</code>,{' '}
                <code>--kanban-*</code>, plus a dark-mode block. This is also
                where{' '}
                <code>[data-navbar-horizontal-shape=&apos;slim&apos;]</code> and{' '}
                <code>[data-navigation-type=&apos;dual&apos;]</code> change the
                navbar height.
              </li>
              <li className="mb-2">
                <code>helpers/background.css</code> — one helper,{' '}
                <code>.bg-holder</code> with its overlay and video variants.
              </li>
              <li className="mb-2">
                <code>components/</code> — the phoenix skin. Most of it is
                Tailwind <code>@utility</code> definitions (<code>.card</code>,{' '}
                <code>.btn-phoenix-primary</code>, <code>.table</code>,{' '}
                <code>.timeline-*</code>…) layered over hummingbird&apos;s own
                component CSS.
              </li>
              <li className="mb-0">
                <code>plugins/</code> — the skins for the third-party widgets,
                last so they win over the vendor stylesheets imported at the
                top.
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Design tokens" noPreview>
            <p className="mb-0">
              Four families cover almost everything. Each name is a CSS custom
              property in <code>@theme</code> and a Tailwind utility at the same
              time.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar mb-6">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Family</th>
                    <th className="whitespace-nowrap">Names</th>
                    <th className="whitespace-nowrap min-w-80">Utilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap">
                      <code>--color-*</code>
                    </td>
                    <td>
                      the palette (<code>gray/blue/red/green/orange/cyan</code>{' '}
                      50–1000) and the semantic set — <code>primary</code>,{' '}
                      <code>secondary</code>, <code>success</code>,{' '}
                      <code>danger</code>, <code>warning</code>,{' '}
                      <code>info</code>, each with <code>-subtle</code>,{' '}
                      <code>-lighter</code>, <code>-light</code>,{' '}
                      <code>-dark</code>, <code>-darker</code>
                    </td>
                    <td>
                      <code>bg-primary</code>, <code>text-danger</code>,{' '}
                      <code>border-success-subtle</code>,{' '}
                      <code>bg-gray-100</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      <code>--background-color-*</code>
                    </td>
                    <td>
                      <code>soft</code>, <code>subtle</code>, <code>muted</code>
                      , <code>default</code>, <code>highlight</code>,{' '}
                      <code>emphasis</code>
                    </td>
                    <td>
                      <code>bg-soft</code> (card surface), <code>bg-muted</code>
                      , <code>bg-default</code> (page)
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      <code>--text-color-*</code>
                    </td>
                    <td>
                      <code>soft</code>, <code>subtle</code>, <code>muted</code>
                      , <code>default</code>, <code>highlight</code>,{' '}
                      <code>emphasis</code>
                    </td>
                    <td>
                      <code>text-default</code>, <code>text-muted</code>,{' '}
                      <code>text-soft</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">
                      <code>--border-color-*</code>
                    </td>
                    <td>
                      <code>default</code>, <code>subtle</code> (54% alpha of
                      default), plus one <code>-subtle</code> per theme colour
                    </td>
                    <td>
                      <code>border-default</code>, <code>border-subtle</code>,{' '}
                      <code>border-primary-subtle</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <code>theme.css</code> also owns the shadows (
              <code>--shadow-sm|base|lg|inset</code>), the line heights (
              <code>--leading-sm 1.2</code>, <code>--leading-base 1.49</code>,{' '}
              <code>--leading-lg 1.4</code>), the font stack (Nunito Sans) and
              the breakpoints — <code>sm</code> 576, <code>md</code> 768,{' '}
              <code>lg</code> 992, <code>xl</code> 1200, <code>2xl</code> 1540.
            </p>
            <PhoenixLiveEditor code={tokensCode} />
            <p className="mb-2 mt-6">
              Because the same token names carry different values per theme,
              anything that needs a colour in JavaScript should read the token
              rather than hardcode a hex value:
            </p>
            <PhoenixLiveEditor code={getColorCode} />
            <p className="mb-0 mt-4 text-muted">
              The argument is the custom property name without the leading{' '}
              <code>--</code>, and it must match <code>theme.css</code> exactly.
              A wrong name returns an empty string — in dev it also logs{' '}
              <code>[getColor] missing token</code>.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Type scale" noPreview>
            <p className="mb-0">
              The scale is a 1.25 ratio around a 16px base, so the small sizes
              are not round numbers. <code>text-md</code> sits <em>below</em>{' '}
              <code>text-base</code> — the naming comes from the template, not
              from stock Tailwind.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Utility</th>
                    <th className="whitespace-nowrap">Token</th>
                    <th className="whitespace-nowrap">Size</th>
                    <th className="whitespace-nowrap min-w-80">Typical use</th>
                  </tr>
                </thead>
                <tbody>
                  <ScaleRow name="xs" px="8.192px" note="badges, tiny meta" />
                  <ScaleRow name="sm" px="10.24px" note="navbar labels" />
                  <ScaleRow
                    name="md"
                    px="12.8px"
                    note="table cells, most body copy in the app"
                  />
                  <ScaleRow name="base" px="16px" note="body default, h5" />
                  <ScaleRow name="lg" px="20px" note="h4, lead paragraphs" />
                  <ScaleRow name="xl" px="25px" note="h3" />
                  <ScaleRow name="2xl" px="31.25px" note="h2" />
                  <ScaleRow name="3xl" px="39.063px" note="h1" />
                  <ScaleRow name="4xl" px="48.828px" />
                  <ScaleRow name="5xl" px="61.035px" />
                  <ScaleRow name="6xl" px="76.294px" note="display-1" />
                </tbody>
              </table>
            </div>
            <p className="mb-0 mt-4 text-muted">
              Every size ships with <code>--text-*--line-height: inherit</code>,
              so a <code>text-*</code> utility changes the font size only and
              leaves the inherited line height alone. Set it explicitly with{' '}
              <code>leading-sm</code> / <code>leading-base</code> /{' '}
              <code>leading-lg</code> / <code>leading-none</code> when it
              matters. Heading elements take their size from{' '}
              <code>--h1-font-size</code>…<code>--h6-font-size</code> in{' '}
              <code>root.css</code>.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Restyling a component">
            <p className="mb-0">
              Take the phoenix button as the example. There are three ways to
              change how it looks, in increasing order of reach.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={phoenixButtonCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Option 1: swap the variant class">
            <p className="mb-0">
              Hummingbird ships the colour, style and size variants as classes —{' '}
              <code>btn-{'{color}'}</code>, <code>btn-subtle-{'{color}'}</code>,{' '}
              <code>btn-outline-{'{color}'}</code>,{' '}
              <code>btn-text-{'{color}'}</code>, plus phoenix&apos;s own{' '}
              <code>btn-phoenix-{'{color}'}</code>. In TSX prefer{' '}
              <code>components/base/Button</code>, which emits exactly these
              classes from <code>variant</code> / <code>color</code> props.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={hbUtilityCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Option 2: add Tailwind utilities">
            <p className="mb-0">
              The variant classes are ordinary utilities, so any Tailwind
              utility composes with them. This is the right tool for a one-off.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={tailwindUtilityCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Option 3: define your own utility"
            noPreview
          >
            <p className="mb-0">
              When the same combination repeats, name it once with{' '}
              <code>@utility</code> and <code>@apply</code>. Put it in a file of
              your own imported after the phoenix layers — do not add it to a
              copied file.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={applyCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overriding CSS variables" noPreview>
            <p className="mb-0">
              Components are built out of custom properties, so most restyling
              is repointing a variable rather than writing a rule. Do it
              globally in <code>@theme</code> or locally in any scope.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <p className="mb-2 font-semibold">Global</p>
            <PhoenixLiveEditor code={globalVariableCode} />
            <p className="mb-2 mt-6 font-semibold">Local</p>
            <PhoenixLiveEditor code={localVariableCode} />
            <p className="mb-0 mt-4 text-muted">
              The variable names are real:{' '}
              <code>
                node_modules/@hummingbirdui/hummingbird/src/components
              </code>{' '}
              declares the defaults (<code>--btn-bg</code>,{' '}
              <code>--btn-color</code>, <code>--btn-hover-bg</code>,{' '}
              <code>--btn-active-bg</code>…) and{' '}
              <code>src/assets/css/components</code> re-points them per variant.
              Open the component&apos;s CSS file to see which knobs it exposes
              before inventing one.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Adding your own styles" noPreview>
            <p className="mb-0">
              In order of preference: utilities in the markup, then a
              component-scoped variable override, then a rule of your own. Only
              the last needs a file.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <p>
              App-specific CSS goes at the bottom of{' '}
              <code>src/assets/css/index.css</code> (that is where the
              React-only Suspense loader lives) or in a new file imported from
              there after the phoenix layers. Both positions come after the
              skin, so a plain class selector wins without{' '}
              <code>!important</code>. Use <code>@variant dark</code> for the
              dark-mode half and the design tokens rather than literal colours.
            </p>
            <PhoenixLiveEditor code={ownStylesCode} />
            <p className="mb-0 mt-4 text-muted">
              What not to do: edit a file under <code>components/</code>,{' '}
              <code>plugins/</code>, <code>theme.css</code> or{' '}
              <code>root.css</code> — the next upstream sync overwrites it. If
              the change really belongs to the theme, make it upstream and
              record it in <code>SOURCE.md</code>.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="The bs2tw codemod" noPreview>
            <p className="mb-0">
              <code>tools/bs2tw/</code> is a migration aid, not part of the
              build. It rewrites Bootstrap class names in TSX to the Tailwind
              names this theme uses (<code>text-nowrap</code> →{' '}
              <code>whitespace-nowrap</code>, <code>border-translucent</code> →{' '}
              <code>border-subtle</code>, <code>lh-1</code> →{' '}
              <code>leading-none</code>, the <code>xxl:</code> breakpoint prefix
              → <code>2xl:</code>).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={codemodCode} />
            <p className="mb-0 mt-4 text-muted">
              It is single-use per file: Bootstrap and Tailwind share class
              names with different meanings, so a second pass shifts spacing
              again (<code>mb-4</code> → <code>mb-6</code> → <code>mb-10</code>
              ). <code>tools/bs2tw/CONVERTED.md</code> is the record of what has
              already been processed. New code should be written in Tailwind
              directly and never needs it.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default Styling;
