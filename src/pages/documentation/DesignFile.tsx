import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Link } from 'react-router';

const DesignFile = () => {
  return (
    <div>
      <DocPageHeader className="mb-6" title="Design">
        <p className="mb-0">
          {import.meta.env.VITE_TITLE} is designed in Figma, and the Figma file
          is the source of truth for the visual language this app implements.
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header title="Figma file" noPreview />
          <PhoenixDocCard.Body>
            <Alert color="info" className="p-4 mb-6">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="text-xl"
                />
                <div className="flex-1 ms-4">
                  <p className="mb-0">
                    The Figma file is only available with the{' '}
                    <strong>Standard Plus</strong> and{' '}
                    <strong>Extended Plus</strong> licenses.
                  </p>
                </div>
              </div>
            </Alert>
            <h5 className="mb-2">To open the design</h5>
            <ol className="mb-0 ps-4">
              <li className="mb-2">
                Install{' '}
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                </a>{' '}
                (the desktop app or the browser version).
              </li>
              <li className="mb-2">
                Download{' '}
                <code>
                  {import.meta.env.VITE_NAME}-design-
                  {import.meta.env.VITE_VERSION}.zip
                </code>{' '}
                from your ThemeWagon account.
              </li>
              <li className="mb-2">
                Unzip it and open the link inside{' '}
                <code>Figma file link.md</code>.
              </li>
              <li className="mb-0">
                The file opens <strong>read-only</strong>. Duplicate it into
                your own Figma drafts before editing.
              </li>
            </ol>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header
            title="How the design maps to the code"
            description="Where to change a value so the whole app follows."
            noPreview
          />
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <table className="table table-bordered text-md mb-0">
                <thead className="bg-muted text-default">
                  <tr>
                    <th className="whitespace-nowrap">In Figma</th>
                    <th className="whitespace-nowrap min-w-80">In this app</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap">Colour styles</td>
                    <td>
                      The <code>@theme</code> block in{' '}
                      <code>src/assets/css/theme.css</code> (the raw ramps) and
                      the semantic variables in{' '}
                      <code>src/assets/css/root.css</code>, which map those
                      ramps onto light and dark.
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Text styles</td>
                    <td>
                      The font family, size and weight tokens in{' '}
                      <code>theme.css</code>, surfaced as the Tailwind{' '}
                      <code>text-*</code> and <code>font-*</code> utilities the
                      pages use.
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Spacing and radii</td>
                    <td>
                      Tailwind&apos;s spacing scale, plus the corner-radius
                      variables the components read — for example{' '}
                      <code>--input-btn-border-radius</code> in{' '}
                      <code>root.css</code>.
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Components</td>
                    <td>
                      hb-react primitives (<code>@hummingbirdui/react</code>)
                      skinned by <code>src/assets/css/components/</code>, with
                      the theme-specific wrappers in{' '}
                      <code>src/components/base/</code>.
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap">Icons</td>
                    <td>
                      Font Awesome, Feather and Unicons — the same three sets
                      the design uses. See the{' '}
                      <Link to="/modules/icons/font-awesome">icons</Link> pages.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 mb-0 text-muted">
              Changing a token propagates everywhere; changing a utility class
              on a page does not. Prefer the token. The{' '}
              <Link to="/documentation/customization/styling">styling</Link>{' '}
              page walks through it.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DesignFile;
