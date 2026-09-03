import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const overviewCode = `
<>
  <div className="float-start">Float left on all viewport sizes</div>
  <br />
  <div className="float-end">Float right on all viewport sizes</div>
  <br />
  <div className="float-none">Don't float on all viewport sizes</div>
</>
`;

const responsiveCode = `
<>
  <div className="sm:float-start">Float start on viewports sized SM (small) or wider</div>
  <br />
  <div className="md:float-start">Float start on viewports sized MD (medium) or wider</div>
  <br />
  <div className="lg:float-start">Float start on viewports sized LG (large) or wider</div>
  <br />
  <div className="xl:float-start">Float start on viewports sized XL (extra-large) or wider</div>
  <br />
</>
`;

const FloatExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Float"
        description="Toggle floats on any element, across any breakpoint, using our responsive float utilities"
        link={{
          text: 'Float on Tailwind',
          url: 'https://tailwindcss.com/docs/float'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview">
            <p className="mb-0 mt-2 text-muted">
              These utility classes float an element with the{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
                CSS <code>float</code> property
              </a>
              . <code>float-start</code> and <code>float-end</code> are the
              logical pair — they resolve to left and right and flip under{' '}
              <code>dir=&quot;rtl&quot;</code>; <code>float-left</code> and{' '}
              <code>float-right</code> are the physical equivalents, and{' '}
              <code>float-none</code> disables floating. Please be aware float
              utilities have no effect on flex or grid items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={overviewCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive">
            <p className="mb-0 mt-2 text-muted">
              Responsive variations also exist for each <code>float</code>{' '}
              value: prefix the class with a breakpoint variant —{' '}
              <code>sm:</code> (576px), <code>md:</code> (768px),{' '}
              <code>lg:</code> (992px), <code>xl:</code> (1200px) or{' '}
              <code>2xl:</code> (1540px) — and it applies from that width up.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FloatExample;
