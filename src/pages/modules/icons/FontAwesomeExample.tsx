import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import IconCardList from 'components/cards/IconCardList';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { faBrandIconList } from 'data/icons/faBrandIconList';
import { faRegularIconList } from 'data/icons/faRegularIconList';
import { faSolidIconList } from 'data/icons/faSolidIconList';
import DocPagesLayout from 'layouts/DocPagesLayout';

library.add(fab, faFacebook, faTwitter, faYoutube);

const importFromLibrary = `
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebook, faTwitter);

const element = <FontAwesomeIcon icon={['fab', 'facebook']} />;
`;

const individualAddIconCode = `
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />;
`;

const solidImportCode = `import { faHome } from '@fortawesome/free-solid-svg-icons';`;
const regularImportCode = `import { faBell } from '@fortawesome/free-regular-svg-icons';`;
const brandImportCode = `import { faGithub } from '@fortawesome/free-brands-svg-icons';`;

const exampleCode = `
<div>
  <div>
    <FontAwesomeIcon icon={faHome} className="text-success text-2xl me-4" />
    <FontAwesomeIcon icon={faHome} className="text-success text-xl me-4" />
    <FontAwesomeIcon icon={faHome} className="text-success text-lg" />
  </div>
  <div className="mt-4">
    <FontAwesomeIcon icon={['fab', 'facebook']} className="text-primary text-2xl me-4" />
    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-info text-2xl me-4" />
    <FontAwesomeIcon icon={['fab', 'youtube']} className="text-danger text-2xl me-4" />
  </div>
</div>
`;

const FontAwesomeExample = () => {
  return (
    <div>
      <DocPageHeader
        title="React Font Awesome"
        description="Font Awesome 6 React component using SVG with JS"
        link={{
          text: 'React Font Awesome Documentation',
          url: 'https://docs.fontawesome.com/web/use-with/react'
        }}
      >
        <p className="mb-2">
          Font Awesome icons come from the{' '}
          <code>@fortawesome/react-fontawesome</code> package, not from
          hb-react. <code>FontAwesomeIcon</code> renders an inline{' '}
          <code>svg</code> sized in <code>em</code>, so a text size utility on
          the icon sets its dimensions and a text colour utility sets its
          colour.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              Import the icons you need from their icon package and register
              them once with <code>library.add()</code>. Registered icons can
              then be referenced by name from anywhere.
            </p>
            <PhoenixLiveEditor code={importFromLibrary} />

            <p className="mt-6 mb-2">
              Or import an icon into the component that uses it and pass the
              icon object itself.
            </p>
            <PhoenixLiveEditor code={individualAddIconCode} />
            <p className="mb-0 mt-4">
              Both approaches are described in{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.fontawesome.com/web/use-with/react/add-icons"
              >
                Font Awesome&apos;s React guide
              </a>
              .
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              The first row sizes the same icon with text size utilities; the
              second uses brand icons registered through the library.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FontAwesomeIcon, faHome }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Icons" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              Import solid icons from{' '}
              <code>@fortawesome/free-solid-svg-icons</code>.
            </p>
            <PhoenixLiveEditor code={solidImportCode} />
            <div className="mt-4">
              <IconCardList icons={faSolidIconList} iconFamily="font-awesome" />
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Regular Icons" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              Import regular icons from{' '}
              <code>@fortawesome/free-regular-svg-icons</code>.
            </p>
            <PhoenixLiveEditor code={regularImportCode} />
            <div className="mt-4">
              <IconCardList
                icons={faRegularIconList}
                iconFamily="font-awesome"
              />
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Brand Icons" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              Import brand icons from{' '}
              <code>@fortawesome/free-brands-svg-icons</code>.
            </p>
            <PhoenixLiveEditor code={brandImportCode} />
            <div className="mt-4">
              <IconCardList icons={faBrandIconList} iconFamily="font-awesome" />
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FontAwesomeExample;
