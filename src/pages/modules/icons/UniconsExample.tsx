import * as Unicons from '@iconscout/react-unicons';
import { UilPlaneDeparture, UilRocket } from '@iconscout/react-unicons';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import IconCardList from 'components/cards/IconCardList';
import DocPagesLayout from 'layouts/DocPagesLayout';
import Unicon from 'components/base/Unicon';
import { uniconList } from 'data/icons/uniconList';

const phoenixUniconCode = `
import Unicon from 'components/base/Unicon';
import { UilHome } from '@iconscout/react-unicons';

const element = <Unicon icon={UilHome} />;
`;

const individualIconCode = `
import { UilHome } from '@iconscout/react-unicons';

const element = <UilHome />;
`;

const fullPackageCode = `
import * as Unicons from '@iconscout/react-unicons';

const element = <Unicons.UilHome />;
`;

const lineBoxCode = `
import Unicon from 'components/base/Unicon';
import { UilHome } from '@iconscout/react-unicons';

const element = <Unicon icon={UilHome} lineBox />;
`;

const exampleCode = `
import Unicon from 'components/base/Unicon';
import { UilRocket, UilPlaneDeparture } from '@iconscout/react-unicons';
import * as Unicons from '@iconscout/react-unicons';

<div>
  <div className="mb-4">
    <Unicon icon={UilRocket} fill="currentColor" className="text-danger me-2" size={32} />
    <Unicon icon={UilRocket} fill="currentColor" className="text-success me-2" size={24} />
    <Unicon icon={UilRocket} fill="currentColor" className="text-primary" size={16} />
  </div>
  <div className="mb-4">
    <UilPlaneDeparture fill="currentColor" className="text-danger me-2" size={32} />
    <UilPlaneDeparture fill="currentColor" className="text-success me-2" size={24} />
    <UilPlaneDeparture fill="currentColor" className="text-primary" size={16} />
  </div>
  <div>
    <Unicons.UilStretcher fill="currentColor" className="text-danger me-2" size={32} />
    <Unicons.UilStretcher fill="currentColor" className="text-success me-2" size={24} />
    <Unicons.UilStretcher fill="currentColor" className="text-primary" size={16} />
  </div>
</div>
`;

const UniconsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="React Unicons"
        description="Pixel-perfect vector icons as React Components."
        link={{
          text: 'Unicons Documentation',
          url: 'https://github.com/Iconscout/react-unicons'
        }}
      >
        <p className="mb-2">
          Unicons come from the <code>@iconscout/react-unicons</code> package,
          not from hb-react. Every icon is an inline <code>svg</code> that takes{' '}
          <code>size</code> and <code>fill</code> props; pass{' '}
          <code>fill=&quot;currentColor&quot;</code> to colour it with a text
          colour utility class.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">
              This theme&apos;s <code>components/base/Unicon</code> wrapper
              takes the icon component in an <code>icon</code> prop and forwards
              every other prop to it.
            </p>
            <PhoenixLiveEditor code={phoenixUniconCode} />
            <p className="mt-6 mb-2">Import a single icon directly.</p>
            <PhoenixLiveEditor code={individualIconCode} />
            <p className="mt-6 mb-2">Or import the whole package.</p>
            <PhoenixLiveEditor code={fullPackageCode} />
            <p className="mt-6 mb-2">
              <code>Unicon</code> also accepts <code>lineBox</code>, which wraps
              the svg in the one-line-height box the icon fonts occupy. Use it
              when the icon sits next to text or inside an anchored container,
              otherwise a bare 16px svg rides high.
            </p>
            <PhoenixLiveEditor code={lineBoxCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              The three blocks below use the wrapper, a single named import and
              the full package namespace in turn.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ Unicons, Unicon, UilPlaneDeparture, UilRocket }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Icons" noPreview>
            <p className="mb-0">
              Click any field to copy the icon&apos;s JSX to the clipboard.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <IconCardList icons={uniconList} iconFamily="unicons" />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default UniconsExample;
