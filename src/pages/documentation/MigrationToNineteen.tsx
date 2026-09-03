import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@hummingbirdui/react';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import {
  ecomTopRegionsMap,
  forawardRefCode,
  providerCode,
  scrollbarCode,
  scrollbarCodeType,
  scrollbarHelperCode,
  useContextReplaceCode
} from 'data/migrations';

/**
 * Body of the `v1.10.0 → v2.0.0` entry on `/migrations` — the React 18 → 19
 * upgrade. Historical: these steps describe what that release changed, and are
 * only relevant if you are coming from v1.10.0 or older.
 */
const MigrationToNineteen = () => {
  return (
    <div className="bg-subtle p-4 py-8 mb-8 rounded-md">
      <Alert variant="subtle" color="warning" className="items-start mb-6">
        <Alert.Icon>
          <FontAwesomeIcon icon={faCircleInfo} />
        </Alert.Icon>
        <p className="mb-0 flex-1">
          This is a major update. Back up your project before upgrading. The
          release is focused on the React version itself — read React&apos;s own{' '}
          <a
            href="https://react.dev/blog/2024/04/25/react-19-upgrade-guide"
            target="_blank"
            rel="noreferrer"
          >
            React 19 upgrade guide
          </a>{' '}
          alongside the steps below.
        </p>
      </Alert>

      <p>
        This release moved the template from <code>React 18.2.0</code> to{' '}
        <code>React 19.1.0</code>, along with every dependency that needed a
        React 19 compatible version. If you are upgrading from{' '}
        <code>v1.10.0</code> to <code>v2.0.0</code>, follow the steps below.
      </p>

      <h5 className="mt-4 mb-2">
        1. Update <code>package.json</code>
      </h5>
      <p>
        Every package the template ships with is React 19 compatible. Copy the{' '}
        <code>dependencies</code> and <code>devDependencies</code> blocks from
        this version of the template into your project.
      </p>

      <h5 className="mt-4 mb-2">
        2. Replace <code>react-router-dom</code> with <code>react-router</code>
      </h5>
      <p>
        React Router publishes the package as <code>react-router</code> from v7
        on. Every <code>react-router-dom</code> import becomes{' '}
        <code>react-router</code>; the exports are unchanged. See the{' '}
        <a
          href="https://reactrouter.com/upgrading/v6#upgrade-to-v7"
          target="_blank"
          rel="noreferrer"
        >
          React Router v7 upgrade guide
        </a>
        .
      </p>

      <h5 className="mt-4 mb-2">
        3. Key the <code>Suspense</code> boundary in <code>Routes.tsx</code>
      </h5>
      <p>
        Give the route-level <code>Suspense</code> a key so React remounts the
        boundary per route instead of hiding content that is already on screen.
      </p>
      <PhoenixLiveEditor
        code={`<Suspense key={location.pathname} fallback={'Loading..'}>`}
      />

      <h5 className="mt-4 mb-2">
        4. Replace <code>forwardRef</code> with a <code>ref</code> prop
      </h5>
      <p>
        React 19 passes <code>ref</code> to function components as an ordinary
        prop, so the <code>forwardRef</code> wrapper can be dropped.
      </p>
      <PhoenixLiveEditor code={forawardRefCode} />

      <h5 className="mt-4 mb-2">
        5. Switch <code>useContext</code> to the <code>use()</code> API
      </h5>
      <p>
        React 19 adds <code>use()</code>, which reads a context (or a promise).
        Replace every <code>useContext</code> call with it.
      </p>
      <PhoenixLiveEditor code={useContextReplaceCode} />

      <h5 className="mt-4 mb-2">
        6. Use the shorthand <code>Provider</code> syntax
      </h5>
      <p>
        A context can be rendered directly in React 19, so{' '}
        <code>{`<Context.Provider>`}</code> becomes <code>{`<Context>`}</code>.
      </p>
      <PhoenixLiveEditor code={providerCode} />

      <h5 className="mt-4 mb-2">
        7. Run the React <code>codemods</code> for anything left
      </h5>
      <p>
        The official codemods list and apply the remaining React 18 → 19
        changes, including the TypeScript types.
      </p>
      <PhoenixLiveEditor
        code={`npx types-react-codemod@latest preset-19 . // for TypeScript`}
      />

      <h5 className="mt-4 mb-2">
        8. Update the <code>Scrollbar</code> component and its types
      </h5>
      <p>
        The scrollbar moved from <code>react-custom-scrollbars-2</code> to{' '}
        <code>simplebar-react</code>. Update{' '}
        <code>src/components/base/Scrollbar.tsx</code> to match:
      </p>
      <PhoenixLiveEditor code={scrollbarCode} />
      <p className="mt-2">
        <code>simplebar-react</code> ships no types, so declare them yourself in{' '}
        <code>src/types/simplebar-react.d.ts</code>:
      </p>
      <PhoenixLiveEditor code={scrollbarCodeType} />
      <p className="mt-2">
        SimpleBar sizes itself from its own content, so every existing{' '}
        <code>Scrollbar</code> usage needs an explicit height or max height to
        keep its previous layout.
      </p>
      <PhoenixLiveEditor code={scrollbarHelperCode} />

      <h5 className="mt-4 mb-2">
        9. Update <code>EcomTopRegionsMap</code>
      </h5>
      <p>
        <code>@changey/react-leaflet-markercluster</code> is not compatible with
        React 19 and was replaced by <code>react-leaflet-markercluster</code>.
        Update the imports in the component accordingly.
      </p>
      <PhoenixLiveEditor code={ecomTopRegionsMap} />

      <h5 className="mt-4 mb-2">
        10. Update the <code>Unicons</code> and <code>FontAwesome</code> icons
      </h5>
      <p>
        The current <code>@iconscout/react-unicons</code> and FontAwesome
        releases dropped some icons, so the components using them have to be
        updated. The removed icons are:
      </p>
      <p className="mb-2">
        <strong>
          Unicons (<code>src/types/react-unicons.d.ts</code> and{' '}
          <code>src/data/icons/uniconList.ts</code>)
        </strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>UilArrowGrowth</li>
        <li>UilBabyCarriage</li>
        <li>UilBed</li>
        <li>UilBrowser</li>
        <li>UilCalender — renamed to UilCalendar</li>
        <li>UilCornerUpLeftAlt</li>
      </ul>
      <p className="mb-2">
        <strong>
          FontAwesome (<code>src/data/icons/faSolidIconList.ts</code>)
        </strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>FaArrowTurnRight</li>
      </ul>
      <p>
        Unicons no longer fill themselves from the current text color either, so
        add <code>fill=&quot;currentColor&quot;</code> to every Unicon usage.
      </p>

      <h5 className="mt-4 mb-2">
        11. Update <code>PhoenixLiveProvider</code>
      </h5>
      <p>
        <code>prism-react-renderer</code> no longer exports{' '}
        <code>defaultProps</code>. Remove it and its type from{' '}
        <code>src/components/docs/PhoenixLiveProvider.tsx</code>.
      </p>

      <h5 className="mt-4 mb-2">12. Reinstall the dependencies</h5>
      <p>
        After replacing <code>package.json</code>, delete the old lockfile and{' '}
        <code>node_modules</code> before installing.
      </p>
      <PhoenixLiveEditor
        code={`rm -rf package-lock.json node_modules && npm install`}
      />

      <h5 className="mt-4 mb-2">13. Run the project</h5>
      <p>Start the dev server and check the app end to end.</p>
      <PhoenixLiveEditor code="npm run dev" />
    </div>
  );
};

export default MigrationToNineteen;
