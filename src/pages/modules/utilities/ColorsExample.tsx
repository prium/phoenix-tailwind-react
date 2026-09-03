import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const colorsCode = `
<>
  <p className="text-primary">text-primary</p>
  <p className="text-secondary">text-secondary</p>
  <p className="text-success">text-success</p>
  <p className="text-info">text-info</p>
  <p className="text-warning">text-warning</p>
  <p className="text-danger">text-danger</p>
  <p className="inline-block pe-4 text-default">text-default</p>
  <br />
  <p className="inline-block pe-4 text-soft">text-soft</p>
  <br />
  <p className="inline-block pe-4 text-subtle">text-subtle</p>
  <br />
  <p className="inline-block pe-4 text-muted">text-muted</p>
  <br />
  <p className="inline-block pe-4 text-highlight">text-highlight</p>
  <br />
  <p className="inline-block pe-4 text-emphasis">text-emphasis</p>
  <br />
  <p className="inline-block pe-4 text-light bg-dark">text-light</p>
  <br />
  <p className="inline-block pe-4 text-dark">text-dark</p>
  <br />
  <p className="inline-block pe-4 text-contrast bg-dark">text-contrast</p>
  <br />
  <span className="pe-4 text-primary-subtle bg-dark dark:bg-gray-400">text-primary-subtle</span>
  <br />
  <span className="pe-4 text-primary-light">text-primary-light</span>
  <br />
  <span className="pe-4 text-primary-lighter">text-primary-lighter</span>
  <br />
  <span className="pe-4 text-primary-dark">text-primary-dark</span>
  <br />
  <span className="pe-4 text-primary-darker">text-primary-darker</span>
  <br />
  <span className="pe-4 text-secondary-subtle bg-dark dark:bg-gray-400">text-secondary-subtle</span>
  <br />
  <span className="pe-4 text-secondary-light">text-secondary-light</span>
  <br />
  <span className="pe-4 text-secondary-lighter">text-secondary-lighter</span>
  <br />
  <span className="pe-4 text-secondary-dark bg-white">text-secondary-dark</span>
  <br />
  <span className="pe-4 text-secondary-darker">text-secondary-darker</span>
  <br />
  <span className="pe-4 text-success-subtle bg-dark dark:bg-gray-400">text-success-subtle</span>
  <br />
  <span className="pe-4 text-success-light">text-success-light</span>
  <br />
  <span className="pe-4 text-success-lighter">text-success-lighter</span>
  <br />
  <span className="pe-4 text-success-dark">text-success-dark</span>
  <br />
  <span className="pe-4 text-success-darker">text-success-darker</span>
  <br />
  <span className="pe-4 text-info-subtle bg-dark dark:bg-gray-400">text-info-subtle</span>
  <br />
  <span className="pe-4 text-info-light">text-info-light</span>
  <br />
  <span className="pe-4 text-info-lighter">text-info-lighter</span>
  <br />
  <span className="pe-4 text-info-dark">text-info-dark</span>
  <br />
  <span className="pe-4 text-info-darker">text-info-darker</span>
  <br />
  <span className="pe-4 text-warning-subtle bg-dark dark:bg-gray-400">text-warning-subtle</span>
  <br />
  <span className="pe-4 text-warning-light">text-warning-light</span>
  <br />
  <span className="pe-4 text-warning-lighter">text-warning-lighter</span>
  <br />
  <span className="pe-4 text-warning-dark">text-warning-dark</span>
  <br />
  <span className="pe-4 text-warning-darker">text-warning-darker</span>
  <br />
  <span className="pe-4 text-danger-subtle bg-dark dark:bg-gray-400">text-danger-subtle</span>
  <br />
  <span className="pe-4 text-danger-light">text-danger-light</span>
  <br />
  <span className="pe-4 text-danger-lighter">text-danger-lighter</span>
  <br />
  <span className="pe-4 text-danger-dark">text-danger-dark</span>
  <br />
  <span className="pe-4 text-danger-darker">text-danger-darker</span>
  <br />
</>
`;

const opacityCode = `
<>
  <div className="text-primary mb-1">This is default primary text</div>
  <div className="text-primary/75 mb-1">This is 75% opacity primary text using utility class</div>
  <div className="text-primary/50 mb-1">This is 50% opacity primary text using utility class</div>
  <div className="text-primary/25 mb-1">This is 25% opacity primary text using utility class</div>
</>
`;

const ColorsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Color"
        description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
        link={{
          text: 'Color on Tailwind',
          url: 'https://tailwindcss.com/docs/colors'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Colors">
            <p className="mb-0 text-muted">
              The theme colors — <code>primary</code>, <code>secondary</code>,{' '}
              <code>success</code>, <code>info</code>, <code>warning</code> and{' '}
              <code>danger</code> — each ship a <code>subtle</code>,{' '}
              <code>light</code>, <code>lighter</code>, <code>dark</code> and{' '}
              <code>darker</code> step. The body text tokens{' '}
              <code>text-default</code>, <code>text-soft</code>,{' '}
              <code>text-subtle</code>, <code>text-muted</code>,{' '}
              <code>text-highlight</code> and <code>text-emphasis</code> follow
              the theme mode.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={colorsCode} />
        </PhoenixDocCard>

        <DocPageHeader title="Opacity" className="mb-5">
          <p className="mb-0 text-subtle">
            Color opacity allows for real-time color changes without compilation
            and dynamic alpha transparency changes.
          </p>
        </DocPageHeader>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0 text-muted">
              Append <code>/{'{amount}'}</code> to any color utility —{' '}
              <code>text-primary/50</code> — and Tailwind mixes the token with
              transparency at that percentage.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={opacityCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ColorsExample;
