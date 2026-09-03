import {
  faCircleInfo,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Card, Table, cn } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import migrations from 'data/migrations';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import MigrationToNineteen from './MigrationToNineteen';

/** react-bootstrap → hb-react, as applied across this codebase. */
const componentMap = [
  { from: 'Button', to: 'components/base/Button (wraps hb-react Button)' },
  { from: 'Badge', to: 'components/base/Badge' },
  { from: 'Card, Card.Body', to: 'Card, Card.Body' },
  { from: 'Container, Row, Col', to: 'Row, Col (+ plain div.container-small)' },
  { from: 'Dropdown', to: 'Dropdown (content is portaled)' },
  { from: 'Nav, Tabs', to: 'Tabs' },
  { from: 'Modal', to: 'Dialog' },
  { from: 'Offcanvas', to: 'Drawer' },
  { from: 'Form.Control, Form.Select', to: 'Input, Select, Textarea' },
  { from: 'Table', to: 'Table (or components/base/AdvanceTable)' },
  { from: 'Collapse', to: 'Collapsible' },
  { from: 'Pagination', to: 'Pagination' },
  { from: 'OverlayTrigger, Tooltip', to: 'Tooltip' },
  {
    from: 'Stack, Image, ListGroup',
    to: 'plain div / img / ul with utilities'
  },
  { from: 'classnames', to: 'cn' }
];

/**
 * One `Add` / `Modify` / `Remove` group of a version entry. Long lists scroll
 * inside the card instead of pushing the next version off the page.
 */
const FileList = ({ label, files }: { label: string; files: string[] }) => (
  <div>
    <h6 className="mb-2">
      {label}{' '}
      <span className="text-muted font-normal">({files.length} files)</span>
    </h6>
    <ul
      className={cn('list-disc ps-6 mb-0', {
        'max-h-100 overflow-y-auto scrollbar': files.length > 20
      })}
    >
      {files.map(file => (
        <li key={file}>{file}</li>
      ))}
    </ul>
  </div>
);

const Migrations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div>
      <DocPageHeader
        title="Migrations"
        description={`Every change you have to make in your own project to move from one ${import.meta.env.VITE_TITLE}-React version to the next. Each entry lists the files that were added, changed or removed, newest first.`}
      />

      <Card className="mb-6">
        <Card.Body>
          <Alert variant="subtle" color="warning" className="items-start mb-0">
            <Alert.Icon>
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </Alert.Icon>
            <div className="flex-1">
              <h4 className="mb-2">Before you update</h4>
              Back up your files and read the{' '}
              <Link to="/changelog">changelog</Link> before updating{' '}
              {import.meta.env.VITE_TITLE}-React in your project. If you run
              into a problem during the update, contact us at{' '}
              <a href="mailto:support@themewagon.com">support@themewagon.com</a>
              .
            </div>
          </Alert>
        </Card.Body>
      </Card>

      <PhoenixDocCard className="mb-6">
        <PhoenixDocCard.Header noPreview>
          <div
            className="flex items-center group scroll-mt-20"
            id="bootstrap-to-tailwind"
          >
            <p className="text-default whitespace-nowrap mb-0">
              <code className="text-lg opacity-50">Bootstrap 5</code>
              <span className="mx-4">to</span>
              <code className="text-lg">Tailwind CSS v4</code>
            </p>
            <Link
              to="#bootstrap-to-tailwind"
              className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity font-bold ps-2"
            >
              #
            </Link>
          </div>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <Alert variant="subtle" color="info" className="items-start mb-6">
            <Alert.Icon>
              <FontAwesomeIcon icon={faCircleInfo} />
            </Alert.Icon>
            <p className="mb-0 flex-1">
              In progress, and not part of a released version yet — that is why
              it has no version entry below. It is tracked in{' '}
              <code>MIGRATION.md</code> at the repository root, which records
              which modules are already ported.
            </p>
          </Alert>

          <p>
            The template is being rebuilt on{' '}
            <a
              href="https://tailwindcss.com/docs/upgrade-guide"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS v4
            </a>{' '}
            and <code>@hummingbirdui/react</code> (&quot;hb-react&quot;),
            replacing Bootstrap 5 and <code>react-bootstrap</code>. This is a
            rewrite of the markup rather than a dependency bump, so it is
            described here rather than as a file list.
          </p>

          <h5 className="mt-6 mb-2">1. Stylesheets</h5>
          <p>
            <code>src/assets/scss</code> (Bootstrap + Sass) is replaced by{' '}
            <code>src/assets/css</code> (Tailwind v4, CSS-first). There is no{' '}
            <code>tailwind.config.js</code>: the whole palette is one{' '}
            <code>@theme</code> block in <code>src/assets/css/theme.css</code>,
            and <code>src/assets/css/index.css</code> is the entry point. See{' '}
            <Link to="/documentation/customization/color">Color</Link> for the
            token list.
          </p>

          <h5 className="mt-6 mb-2">2. Class names</h5>
          <p>
            Bootstrap and Tailwind share many class names with different
            meanings: <code>mb-4</code> is 1.5rem in Bootstrap and 1rem in
            Tailwind. Never translate a class from memory. The recurring
            conversions:
          </p>
          <ul className="list-disc ps-6 mb-4 flex flex-col gap-2">
            <li>
              Spacing <code>1…10</code> becomes{' '}
              <code>1, 2, 4, 6, 8, 10, 12, 14, 16, 18</code>; <code>mx-n4</code>{' '}
              becomes <code>-mx-6</code>.
            </li>
            <li>
              <code>fs-11 … fs-6</code> becomes <code>text-xs … text-xl</code>;{' '}
              <code>fw-semibold</code> becomes <code>font-semibold</code>;{' '}
              <code>lh-sm</code> becomes <code>leading-sm</code>.
            </li>
            <li>
              <code>text-body-quaternary/-tertiary/-secondary/text-body</code>{' '}
              become <code>text-soft/-subtle/-muted/text-default</code>, and the
              same words apply to the backgrounds.
            </li>
            <li>
              <code>d-flex</code> → <code>flex</code>,{' '}
              <code>justify-content-between</code> →{' '}
              <code>justify-between</code>, <code>align-items-center</code> →{' '}
              <code>items-center</code>, <code>rounded-pill</code> →{' '}
              <code>rounded-full</code>, <code>text-nowrap</code> →{' '}
              <code>whitespace-nowrap</code>, <code>xxl:</code> →{' '}
              <code>2xl:</code>.
            </li>
            <li>
              The <code>*-opacity-*</code> utilities are gone; Tailwind v4 uses
              the slash modifier (<code>text-primary/75</code>).
            </li>
          </ul>
          <p>
            <code>tools/bs2tw</code> automates the mechanical part. It rewrites
            class strings only, so <code>variant</code> props, class names in
            data files and multi-line <code>classNames(&#123;…&#125;)</code>{' '}
            objects still need a manual pass:
          </p>
          <PhoenixLiveEditor
            code={`npm run convert:tw -- src/pages/apps/chat`}
          />
          <p className="mt-2 mb-6">
            Run it once per file. A second pass re-scales the already-converted
            spacing (<code>mb-4</code> → <code>mb-6</code> → <code>mb-10</code>
            ).
          </p>

          <h5 className="mt-6 mb-2">3. Components</h5>
          <p>
            <code>src/react-bootstrap/</code> is a temporary shim so that files
            which have not been ported yet still compile. It is deleted once{' '}
            <code>grep -rl react-bootstrap src</code> comes back empty — run
            that to see what is left.
          </p>
          <div className="overflow-x-auto scrollbar mb-6">
            <Table className="mb-0">
              <Table.Header>
                <Table.Row>
                  <Table.Head className="ps-0 min-w-62.5">
                    react-bootstrap
                  </Table.Head>
                  <Table.Head className="min-w-82.5">
                    hb-react / app component
                  </Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {componentMap.map(row => (
                  <Table.Row key={row.from}>
                    <Table.Cell className="ps-0">
                      <code>{row.from}</code>
                    </Table.Cell>
                    <Table.Cell>
                      <code>{row.to}</code>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>

          <h5 className="mt-6 mb-2">4. Theme and design tokens</h5>
          <ul className="list-disc ps-6 mb-0 flex flex-col gap-2">
            <li>
              The dark theme attribute on <code>&lt;html&gt;</code> is{' '}
              <code>data-hb-theme</code>, not <code>data-bs-theme</code>, and{' '}
              <code>dark:</code> is a custom variant keyed on it. See{' '}
              <Link to="/documentation/customization/dark-mode">Dark mode</Link>
              .
            </li>
            <li>
              The <code>--phoenix-*</code> custom properties no longer exist.
              Colors are <code>--color-*</code>,{' '}
              <code>--background-color-*</code>, <code>--text-color-*</code> and{' '}
              <code>--border-color-*</code>, so a runtime lookup changes from{' '}
              <code>getColor(&apos;primary&apos;)</code> to{' '}
              <code>getColor(&apos;color-primary&apos;)</code>. Charts read
              their palette this way, and a wrong token name renders black.
            </li>
            <li>
              Sass variables and mixins are gone. Component-level overrides live
              in <code>src/assets/css/root.css</code> as custom properties.
            </li>
          </ul>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      {migrations.map(migration => (
        <PhoenixDocCard className="mb-6" key={migration.from}>
          <PhoenixDocCard.Header noPreview>
            <div
              className="flex items-center group scroll-mt-20"
              id={migration.to}
            >
              <p className="text-default whitespace-nowrap mb-0">
                <code className="text-lg opacity-50">{migration.from}</code>
                <span className="mx-4">to</span>
                <code className="text-lg">{migration.to}</code>
              </p>
              <Link
                to={`#${migration.to}`}
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity font-bold ps-2"
              >
                #
              </Link>
            </div>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            {migration.to === 'v2.0.0' && <MigrationToNineteen />}
            {migration.to === 'v1.9.0' && <MigrationToVite />}

            <div className="flex flex-col gap-6">
              <FileList label="Add" files={migration.new} />
              <FileList label="Modify" files={migration.update} />
              {migration.delete && (
                <FileList label="Remove" files={migration.delete} />
              )}
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      ))}
    </div>
  );
};

/**
 * Body of the `v1.8.0 → v1.9.0` entry — the Create React App → Vite move.
 * Historical: steps 5 and 6 talk about the Bootstrap-era SCSS tree, which no
 * longer exists in the current version.
 */
const MigrationToVite = () => (
  <div className="bg-subtle p-4 py-8 mb-8 rounded-md">
    <Alert variant="subtle" color="warning" className="items-start mb-6">
      <Alert.Icon>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </Alert.Icon>
      <p className="mb-0 flex-1">
        This is a major update. Back up your project before upgrading to the
        latest version.
      </p>
    </Alert>
    <p>
      This release moved the project from Create React App to Vite. If you are
      upgrading from <code>v1.8.0</code> to <code>v1.9.0</code>, follow the
      steps below.
    </p>

    <h5 className="mt-4 mb-2">1. Install the required packages</h5>
    <PhoenixLiveEditor
      code={`npm install vite vite-tsconfig-paths rtlcss @vitejs/plugin-react @types/rtlcss`}
    />

    <h5 className="mt-4 mb-2">2. Uninstall the CRA and webpack packages</h5>
    <PhoenixLiveEditor
      code={`npm uninstall react-scripts clean-webpack-plugin css-loader file-loader mini-css-extract-plugin sass-loader webp-converter webpack webpack-cli webpack-fix-style-only-entries @automattic/webpack-rtl-plugin @craco/craco @craco/types`}
    />

    <h5 className="mt-4 mb-2">3. Update the entry file</h5>
    <p>
      Rename <code>src/index.tsx</code> to <code>src/main.tsx</code> and take
      the contents from this version.
    </p>

    <h5 className="mt-4 mb-2">4. Move and add files</h5>
    <p>
      Move <code>index.html</code> out of <code>src</code> into the project root
      and update it, then add these files from this version:
    </p>
    <ul className="list-disc ps-6">
      <li>
        <code>compile-scss.ts</code>
      </li>
      <li>
        <code>eslint.config.js</code>
      </li>
      <li>
        <code>global.d.ts</code>
      </li>
      <li>
        <code>index.html</code>
      </li>
      <li>
        <code>src/vite-env.d.ts</code>
      </li>
      <li>
        <code>vite.config.ts</code>
      </li>
      <li>
        <code>tsconfig.app.json</code>
      </li>
      <li>
        <code>tsconfig.node.json</code>
      </li>
    </ul>

    <h5 className="mt-4 mb-2">5. Update the SCSS imports</h5>
    <p>
      Vite does not support the <code>~</code> prefix in Sass, so every{' '}
      <code>node_modules</code> import has to become a relative path.
    </p>
    <PhoenixLiveEditor
      code={`@import '~bootstrap/scss/functions'\n// becomes\n@import '../../../node_modules/bootstrap/scss/functions'\n\n// files to review, plus anything else importing with ~ :\n// src/assets/scss/theme.scss\n// src/assets/scss/_bootstrap.scss\n// src/assets/scss/user.scss`}
    />
    <p className="mt-2">
      <strong className="text-default">Superseded:</strong> the current version
      has no Bootstrap Sass build — styling is Tailwind v4 under{' '}
      <code>src/assets/css</code>. This step only applies while upgrading
      through <code>v1.9.0</code>.
    </p>

    <h5 className="mt-4 mb-2">6. Update the environment variables</h5>
    <p>
      Rename every <code>REACT_APP_</code> prefix in <code>.env</code> to{' '}
      <code>VITE_</code>.
    </p>
    <PhoenixLiveEditor
      code={`VITE_PUBLIC_URL=\nVITE_PORT=\nVITE_NAME=\nVITE_TITLE=\nVITE_VERSION=\nVITE_BS_VERSION=\nVITE_TINYMCE_APIKEY=\nVITE_MAPBOX_ACCESS_TOKEN=\nVITE_RB_URL_PREFIX=\nVITE_PURCHASE_LINK=`}
    />
    <p className="mt-2">
      Then replace every <code>process.env</code> read with{' '}
      <code>import.meta.env</code>.
    </p>
    <PhoenixLiveEditor
      code={`process.env.REACT_APP_API_URL\n// becomes\nimport.meta.env.VITE_API_URL`}
    />
    <p className="mt-2">
      <strong className="text-default">Superseded:</strong>{' '}
      <code>VITE_BS_VERSION</code> and <code>VITE_RB_URL_PREFIX</code> were
      Bootstrap-era variables and are no longer part of <code>.env</code>.
    </p>

    <h5 className="mt-4 mb-2">
      7. Update the <code>package.json</code> scripts
    </h5>
    <PhoenixLiveEditor
      code={`"scripts": {\n  "dev": "vite",\n  "build": "vite build",\n  "preview": "vite preview"\n}`}
    />

    <h5 className="mt-4 mb-2">8. Run the server</h5>
    <PhoenixLiveEditor code={`npm run dev`} />
  </div>
);

export default Migrations;
