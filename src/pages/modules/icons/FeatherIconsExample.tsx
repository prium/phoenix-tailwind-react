import FeatherIcon, { Facebook, Twitter, Youtube } from 'feather-icons-react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import IconCardList from 'components/cards/IconCardList';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { featherIconList } from 'data/icons/featherIconList';

const defaultExportCode = `
import FeatherIcon from 'feather-icons-react';

const element = <FeatherIcon icon="home" />;
`;

const namedExportCode = `
import { Home } from 'feather-icons-react';

const element = <Home />;
`;

const exampleCode = `
import FeatherIcon, { Facebook, Twitter, Youtube } from 'feather-icons-react';

<div>
  <div className="mb-4">
    <FeatherIcon icon="home" size={32} className="me-2 text-success" />
    <FeatherIcon icon="home" size={24} className="me-2 text-success" />
    <FeatherIcon icon="home" size={16} className="text-success" />
  </div>

  <div>
    <Facebook className="me-2 text-primary" />
    <Twitter className="me-2 text-info" />
    <Youtube className="text-danger" />
  </div>
</div>
`;

const FeatherIconsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Feather Icons"
        description="Simply beautiful open source icons"
        link={{
          text: 'Feather Icons Documentation',
          url: 'https://github.com/ianmiller347/feather-icons-react'
        }}
      >
        <p className="mb-2">
          Feather icons come from the <code>feather-icons-react</code> package,
          not from hb-react. Each icon renders an inline <code>svg</code> that
          takes its colour from <code>currentColor</code>, so the theme&apos;s
          text colour utilities apply to it directly.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              Use the default export and pass the icon name in the{' '}
              <code>icon</code> prop.
            </p>
            <PhoenixLiveEditor code={defaultExportCode} />
            <p className="mt-6 mb-2">
              Or use the named export for that icon in place of the{' '}
              <code>icon</code> prop.
            </p>
            <PhoenixLiveEditor code={namedExportCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Set the icon dimensions with the <code>size</code> prop and its
              colour with a text colour utility class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FeatherIcon, Youtube, Facebook, Twitter }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Icons" noPreview>
            <p className="mb-0">
              Click any field to copy the icon&apos;s JSX to the clipboard.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <IconCardList icons={featherIconList} iconFamily="feather" />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FeatherIconsExample;
