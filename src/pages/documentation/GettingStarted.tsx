import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Link } from 'react-router';
import { PropsWithChildren, ReactNode } from 'react';

const installCode = `
npm i
npm run dev
`;

const structureCode = `
phoenix-react/
├─ index.html — the HTML shell: fonts, Font Awesome, pre-paint theme script
├─ vite.config.ts — Vite with the React, Tailwind and tsconfig-paths plugins
├─ public/ — files served as-is (favicon, manifest, the self-hosted tinymce/)
├─ scripts/ — one-off maintenance scripts (product zip, webp conversion)
├─ tools/ — repo tooling: the bs2tw class codemod, verify/ screenshot helpers
├─ tests/visual/ — the Playwright visual-regression suite
└─ src/
   ├─ main.tsx — imports the stylesheet, mounts the router inside the providers
   ├─ App.tsx — the root route element: <Outlet /> plus the settings panel
   ├─ Routes.tsx — every route in the app
   ├─ sitemap.tsx — the nav tree the navbars and the search box read
   ├─ config.ts — the layout/theme config object and its defaults
   ├─ assets/css/ — the stylesheet (see "Styles" below)
   ├─ assets/img/, assets/video/ — media used by the demo pages
   ├─ assets/scss/ — legacy Bootstrap Sass, kept for reference only, never built
   ├─ components/ — reusable UI grouped by kind (base/, common/, cards/ …)
   ├─ layouts/ — page shells: MainLayout, EcommerceLayout, Auth*Layout …
   ├─ pages/ — one file per route, mirroring the URL structure
   ├─ data/ — demo data for the pages, kept out of the components
   ├─ hooks/ — shared hooks (useBreakpoints, useAdvanceTable …)
   ├─ providers/ — React contexts (AppProvider, BreakpointsProvider …)
   ├─ helpers/ — framework-free utilities (utils.ts, getColor …)
   └─ types/ — shared TypeScript types
`;

const routeCode = `
// src/Routes.tsx
import Pricing from 'pages/pages/pricing/Pricing';

{
  path: '/',
  element: (
    <MainLayoutProvider>
      <MainLayout />
    </MainLayoutProvider>
  ),
  children: [
    // …
    {
      path: 'pricing',
      element: <Pricing />
    }
  ]
}
`;

const lazyRouteCode = `
// src/Routes.tsx — heavy pages are code-split
const Calendar = lazy(() => import('pages/apps/calendar/Calendar'));

{
  path: 'calendar',
  element: (
    <Suspense key="calendar" fallback={<PhoenixLoader />}>
      <Calendar />
    </Suspense>
  )
}
`;

const sitemapCode = `
// src/sitemap.tsx
{
  label: 'pages',
  icon: UilFilesLandscapesAlt,
  pages: [
    {
      name: 'pricing',
      icon: 'tag',
      path: '/pricing',
      pathName: 'pricing',
      active: true
    }
  ]
}
`;

const cssCode = `
/* src/assets/css/index.css */
@import 'tailwindcss' theme(static);
@import '@hummingbirdui/react';

/* vendor stylesheets, loaded before the phoenix skin can override them */
@import 'flatpickr/dist/flatpickr.css';
@import 'nouislider/dist/nouislider.css';
@import 'swiper/css/bundle';
@import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

@import './theme.css'; /* the @theme design tokens */
@import './root.css'; /* :root / dark-mode CSS variables */
@import './helpers/background.css';
@import './components/component.css'; /* the phoenix skin, one file per component */
@import './plugins/plugins.css'; /* skins for the third-party plugins */
`;

const getColorCode = `
// src/helpers/utils.ts
import { getColor } from 'helpers/utils';

// reads --color-primary off <html> at runtime, for echarts / leaflet / mapbox
const primary = getColor('color-primary');
`;

const buildCode = `
npm run build
npm run preview
`;

/** One `<code>` label plus a description — used by both tables below. */
const DocRow = ({ label, children }: PropsWithChildren<{ label: string }>) => (
  <tr>
    <td className="whitespace-nowrap">
      <code>{label}</code>
    </td>
    <td>{children}</td>
  </tr>
);

const Step = ({ children }: { children: ReactNode }) => (
  <li className="mb-2">{children}</li>
);

const GettingStarted = () => {
  return (
    <div>
      <DocPageHeader className="mb-6" title="Getting Started">
        <p className="mb-0">
          Welcome to the React version of the{' '}
          <a
            href="https://themewagon.com/themes/phoenix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            original {import.meta.env.VITE_TITLE} theme
          </a>
          . <strong>{import.meta.env.VITE_TITLE} React</strong> is a Vite +
          React + TypeScript application. Its UI comes from{' '}
          <strong>hb-react</strong> (<code>@hummingbirdui/react</code>) with the{' '}
          {import.meta.env.VITE_TITLE} skin layered on top, and it is styled
          entirely with <strong>Tailwind CSS v4</strong> — there is no Sass
          build, no Bootstrap and no gulp anywhere in this project. This page
          covers what you need installed, the scripts you will use, how the
          project is laid out, and how to add a page of your own.
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="Prerequisites" noPreview />
          <PhoenixDocCard.Body>
            <ul className="mb-4 ps-4">
              <li className="mb-2">
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node.js
                </a>{' '}
                — Vite 7 requires <code>^20.19.0 || &gt;=22.12.0</code>. The
                project itself does not pin a version, so any Node that
                satisfies Vite will do.
              </li>
              <li className="mb-2">
                <code>npm</code>, which ships with Node.{' '}
                <code>package-lock.json</code> is committed, so{' '}
                <code>npm ci</code> reproduces the exact dependency tree that
                was shipped.
              </li>
              <li className="mb-0">
                Nothing else. There is no global CLI to install and no separate
                CSS build step — Tailwind runs inside Vite through the{' '}
                <code>@tailwindcss/vite</code> plugin.
              </li>
            </ul>
            <p className="mb-0 text-muted">
              The versions this release was built against: React 19, TypeScript
              5.9, Vite 7, Tailwind CSS 4, <code>@hummingbirdui/react</code>{' '}
              1.0.0-beta and React Router 7. See <code>package.json</code> for
              the full list.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="Install and run" noPreview />
          <PhoenixDocCard.Body>
            <ol className="mb-4 ps-4">
              <Step>
                Unzip the download and open the project folder in your terminal.
              </Step>
              <Step>
                Run <code>npm i</code> to install the dependencies.
              </Step>
              <Step>
                Run <code>npm run dev</code>. Vite starts on{' '}
                <code>http://localhost:5001</code> and reloads on save.
              </Step>
            </ol>
            <PhoenixLiveEditor code={installCode} />
            <p className="mt-6 mb-2">
              The port comes from <code>VITE_PORT</code> in <code>.env</code>.
              Change it there, or override it once with{' '}
              <code>npm run dev -- --port 3000</code>.
            </p>
            <p className="mb-2">
              <code>.env</code> also holds the values the app reads through{' '}
              <code>import.meta.env</code>:
            </p>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Variable</th>
                    <th className="whitespace-nowrap min-w-80">
                      What it controls
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <DocRow label="VITE_PORT">
                    Dev server port. <code>npm run preview</code> uses this port{' '}
                    <em>+ 1</em>.
                  </DocRow>
                  <DocRow label="VITE_NAME / VITE_TITLE / VITE_VERSION">
                    Branding strings shown in the footer and in these
                    documentation pages.
                  </DocRow>
                  <DocRow label="VITE_BASENAME">
                    Sub-path to deploy under. It is used twice: as Vite&apos;s{' '}
                    <code>base</code> and as the React Router{' '}
                    <code>basename</code>. Unset means the site is served from{' '}
                    <code>/</code>.
                  </DocRow>
                  <DocRow label="VITE_TINYMCE_APIKEY">
                    API key for the TinyMCE editor used on the WYSIWYG pages.
                    The editor script itself is self-hosted from{' '}
                    <code>public/tinymce</code>, which is committed to the
                    project; after bumping the <code>tinymce</code> package, run{' '}
                    <code>node postinstall.js</code> to re-copy it.
                  </DocRow>
                  <DocRow label="VITE_MAPBOX_ACCESS_TOKEN">
                    Token for the Mapbox maps. Leaflet maps need no token.
                  </DocRow>
                  <DocRow label="VITE_PURCHASE_LINK">
                    Target of the &ldquo;Buy&rdquo; buttons in the settings
                    panel and the showcase navbar.
                  </DocRow>
                </tbody>
              </table>
            </div>
            <p className="mt-4 mb-0 text-muted">
              <code>.env.product</code> is the template that ships with the
              product — it has the same keys with placeholder secrets. Put your
              own keys in <code>.env</code>; never commit real ones.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="npm scripts" noPreview />
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">Script</th>
                    <th className="whitespace-nowrap min-w-80">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <DocRow label="npm run dev">
                    Starts the Vite dev server on <code>VITE_PORT</code> (5001
                    by default), bound to <code>0.0.0.0</code> so other devices
                    on your network can reach it.
                  </DocRow>
                  <DocRow label="npm run build">
                    Runs <code>vite build</code> and writes the optimised bundle
                    to <code>dist/</code>. It does not type-check; run{' '}
                    <code>tsc</code> yourself (below) if you want that in CI.
                  </DocRow>
                  <DocRow label="npm run preview">
                    Serves the built <code>dist/</code> folder locally on{' '}
                    <code>VITE_PORT + 1</code> (5002 by default). Run{' '}
                    <code>build</code> first.
                  </DocRow>
                  <DocRow label="npm run lint">
                    Runs ESLint over <code>src</code> using the flat config in{' '}
                    <code>eslint.config.js</code>. Use{' '}
                    <code>npm run lint:fix</code> to apply the fixable ones.
                  </DocRow>
                  <DocRow label="npm run format">
                    Runs Prettier over <code>src</code> using{' '}
                    <code>.prettierrc.cjs</code>.
                  </DocRow>
                  <DocRow label="npm run convert:tw -- <path>">
                    Repo tooling: rewrites Bootstrap class names to their
                    Tailwind equivalents in the files you point it at. Only
                    useful when porting old markup, and it must never be run
                    twice over the same file.
                  </DocRow>
                  <DocRow label="npm run test:visual">
                    Playwright visual-regression suite. It screenshots the
                    routes listed in <code>tests/visual/pages.ts</code> and
                    diffs them against the static HTML reference, which it
                    expects to find in <code>../phoenix-tailwind/public</code>{' '}
                    next to this project.{' '}
                    <code>npm run test:visual:report</code> opens the HTML
                    report.
                  </DocRow>
                  <DocRow label="npm run deploy">
                    Builds and publishes <code>dist/</code> to GitHub Pages via{' '}
                    <code>gh-pages</code>. Edit the CNAME in the script before
                    using it for your own site.
                  </DocRow>
                </tbody>
              </table>
            </div>
            <p className="mt-4 mb-0 text-muted">
              To type-check without building, run{' '}
              <code>npx tsc --noEmit -p tsconfig.app.json</code>.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="Project structure" noPreview />
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor code={structureCode} />
            <p className="mt-6 mb-0">
              Imports are absolute from <code>src</code> — the{' '}
              <code>paths</code> entry in <code>tsconfig.app.json</code> maps{' '}
              <code>*</code> to <code>./src/*</code> and{' '}
              <code>vite-tsconfig-paths</code> teaches Vite the same mapping. So
              you write{' '}
              <code>import Button from &apos;components/base/Button&apos;</code>{' '}
              from anywhere, never <code>../../..</code>.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header
            title="Adding a page"
            description="Two files: the route and the nav entry."
            noPreview
          />
          <PhoenixDocCard.Body>
            <ol className="mb-4 ps-4">
              <Step>
                Create the component under <code>src/pages/</code>, mirroring
                the URL you want. The file name must match the exported
                component name.
              </Step>
              <Step>
                Register it in <code>src/Routes.tsx</code>. The tree is a React
                Router <code>RouteObject[]</code>: <code>App</code> is the root
                element, and most pages sit under the <code>/</code> route that
                renders <code>MainLayout</code> (navbar, footer, settings
                panel). Nest your entry under the layout you want.
              </Step>
              <Step>
                Add it to <code>src/sitemap.tsx</code> if it should appear in
                the sidebar, the top navbar and the search box — all three read
                that one array.
              </Step>
            </ol>
            <PhoenixLiveEditor code={routeCode} />
            <p className="mt-6 mb-2">
              A page that pulls in something heavy — a chart engine, a calendar,
              a map — should be code-split. Wrap it the way the existing routes
              do, with a <code>key</code> so the fallback remounts per route:
            </p>
            <PhoenixLiveEditor code={lazyRouteCode} />
            <p className="mt-6 mb-2">
              The sitemap entry decides where the link shows up. Each item takes
              a <code>name</code>, an icon, the <code>path</code> and a{' '}
              <code>pathName</code>; <code>active: false</code> greys the link
              out, and <code>new</code> flags it with a badge.
            </p>
            <PhoenixLiveEditor code={sitemapCode} />
            <p className="mt-6 mb-0">
              Layout behaviour — vertical or horizontal navbar, collapsed
              sidebar, RTL — is not part of routing. It lives in the config
              object described on the{' '}
              <Link to="/documentation/customization/configuration">
                configuration
              </Link>{' '}
              page.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header
            title="Styles"
            description="One stylesheet, assembled by Tailwind at build time."
            noPreview
          />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              <code>src/main.tsx</code> imports a single stylesheet,{' '}
              <code>src/assets/css/index.css</code>, and everything else is
              pulled in from there in cascade order:
            </p>
            <PhoenixLiveEditor code={cssCode} />
            <p className="mt-6 mb-2">
              Reading it top to bottom: Tailwind itself, then hb-react (which
              re-exports the hummingbird core CSS plus the animation utilities
              its components need), then the vendor stylesheets — those come
              before the skin on purpose, so the {import.meta.env.VITE_TITLE}{' '}
              overrides in <code>plugins/</code> win the cascade — and finally
              the theme layers.
            </p>
            <p className="mb-2">
              <code>theme(static)</code> on the Tailwind import is worth
              knowing. By default Tailwind v4 only emits the <code>@theme</code>{' '}
              variables a utility actually references; <code>static</code> keeps
              every token in the output. The app needs that because the charts
              and maps read their colours from the DOM at runtime rather than
              through a class:
            </p>
            <PhoenixLiveEditor code={getColorCode} />
            <p className="mt-6 mb-2">
              Without <code>theme(static)</code>, a token no utility happens to
              use would be tree-shaken away, <code>getColor</code> would return
              an empty string and echarts would silently paint black.
            </p>
            <p className="mb-2">
              To restyle the theme, edit the tokens rather than the components:{' '}
              <code>assets/css/theme.css</code> holds the <code>@theme</code>{' '}
              block (the colour ramps, fonts and spacing scale) and{' '}
              <code>assets/css/root.css</code> holds the semantic CSS variables
              for both colour schemes. Per-component overrides live in{' '}
              <code>assets/css/components/</code>, one file per component. The{' '}
              <Link to="/documentation/customization/styling">styling</Link>{' '}
              page goes through this in detail.
            </p>
            <p className="mb-0">
              The colour scheme is applied with a <code>data-hb-theme</code>{' '}
              attribute on <code>&lt;html&gt;</code>, which the{' '}
              <code>dark:</code> variant keys on — see the{' '}
              <Link to="/documentation/customization/dark-mode">dark mode</Link>{' '}
              page.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="Production build" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              <code>npm run build</code> compiles, bundles and minifies
              everything into <code>dist/</code>. <code>npm run preview</code>{' '}
              then serves that folder so you can check the real build before
              shipping it.
            </p>
            <PhoenixLiveEditor code={buildCode} />
            <p className="mt-6 mb-2">
              If the site will not live at the domain root, set{' '}
              <code>VITE_BASENAME</code> in <code>.env</code> before building —
              for example <code>VITE_BASENAME=/dashboard/</code>. Vite prefixes
              every asset URL with it and the router uses it as its{' '}
              <code>basename</code>, so both the assets and the client-side
              routes resolve under the sub-path.
            </p>
            <p className="mb-0">
              The build is a single-page app, so the server has to fall back to{' '}
              <code>index.html</code> for unknown paths. On static hosts that
              usually means copying <code>index.html</code> to{' '}
              <code>404.html</code> — which is exactly what the{' '}
              <code>predeploy</code> script does before publishing to GitHub
              Pages.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default GettingStarted;
