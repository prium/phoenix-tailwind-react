import {
  faChevronRight,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import changelogs from 'data/changelog';
import DocPagesLayout, { SideNavItem } from 'layouts/DocPagesLayout';
import { Link } from 'react-router';

/** `logs` keys in the order they are rendered, with the heading each gets. */
const LOG_SECTIONS = [
  { key: 'new', label: 'New' },
  { key: 'update', label: 'Update' },
  { key: 'fix', label: 'Fix' }
] as const;

/** The right-hand "On this page" nav: one anchor per release. */
const sideNavItems: SideNavItem[] = [
  ...changelogs.map(changelog => ({
    to: `v${changelog.version}`,
    label: `v${changelog.version} ${changelog.title}`
  })),
  { to: 'v1.0.0', label: 'v1.0.0 Initial Release' }
];

const ChangeLog = () => {
  return (
    <div>
      <DocPageHeader className="mb-6" title="Changelog">
        <p className="mb-0">
          Every release of {import.meta.env.VITE_TITLE} React, newest first.
          Each entry links to the matching upgrade steps on the{' '}
          <Link to="/migrations">migrations</Link> page — read those before
          updating an existing project.
        </p>
      </DocPageHeader>

      <DocPagesLayout sideNavItems={sideNavItems}>
        {changelogs.map(changelog => (
          <PhoenixDocCard className="mb-6" key={changelog.version}>
            <PhoenixDocCard.Header noPreview id={`v${changelog.version}`}>
              <div className="flex justify-between items-center gap-4">
                <div>
                  <h5 className="mb-2">
                    <code className="font-bold text-lg">
                      v{changelog.version}
                    </code>{' '}
                    - {changelog.title}
                  </h5>
                  <p className="mb-0 text-muted">{changelog.publishDate}</p>
                </div>
                <Button variant="link" className="whitespace-nowrap" asChild>
                  <Link to={`/migrations/#v${changelog.version}`}>
                    See migration
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-sm ms-1"
                    />
                  </Link>
                </Button>
              </div>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body>
              {changelog.alertText && (
                <Alert
                  variant="subtle"
                  color="warning"
                  className="flex items-center mb-6"
                >
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="text-warning text-xl me-4"
                  />
                  <div>
                    {changelog.alertText}{' '}
                    {changelog.alertLink && (
                      <span>
                        {changelog.alertLink.prefix}{' '}
                        <Link to={changelog.alertLink.link ?? ''}>
                          {changelog.alertLink.linkText}
                        </Link>{' '}
                        {changelog.alertLink.suffix}
                      </span>
                    )}
                  </div>
                </Alert>
              )}

              {LOG_SECTIONS.map(({ key, label }) => {
                const lines = changelog.logs[key];
                if (!lines?.length) return null;
                return (
                  <div key={key} className="mb-4 last:mb-0">
                    <h6 className="mb-2">{label}</h6>
                    <ul className="mb-0 ps-4">
                      {lines.map(line => (
                        <li
                          key={line}
                          className="mb-1"
                          /* the log lines are authored in data/changelog.ts and
                             carry their own <code>/<a> markup */
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))}
                    </ul>
                  </div>
                );
              })}
            </PhoenixDocCard.Body>
          </PhoenixDocCard>
        ))}

        <PhoenixDocCard className="mb-6">
          <PhoenixDocCard.Header noPreview id="v1.0.0">
            <h5 className="mb-2">
              <code className="font-bold text-lg">v1.0.0</code> - Initial
              Release
            </h5>
            <p className="mb-0 text-muted">11 Sep, 2023</p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <p className="mb-0">Nothing to see here.</p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ChangeLog;
