import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Field>
  <Field.Label htmlFor="customRange1">Example range</Field.Label>
  <Range id="customRange1" defaultValue={50} />
</Field>
`;

const sizesCode = `
<>
  <Range size="sm" defaultValue={50} className="mb-6" />
  <Range size="md" defaultValue={50} className="mb-6" />
  <Range size="lg" defaultValue={50} />
</>
`;

const minmaxCode = `
<Field>
  <Field.Label htmlFor="customRange2">Range min and max</Field.Label>
  <Range id="customRange2" min={0} max={5} defaultValue={2} />
</Field>
`;

const stepsCode = `
<Field>
  <Field.Label htmlFor="customRange3">Range step</Field.Label>
  <Range id="customRange3" min={0} max={5} step={0.5} defaultValue={2.5} />
</Field>
`;

const RangeExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Range"
        description="A styled native range slider for picking a value from a range, with consistent cross-browser styling."
        link={{
          text: 'Range on hb-react',
          url: 'https://react.hbui.dev/docs/forms/range'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview">
            <p className="mb-0">
              <code>Range</code> renders an{' '}
              <code>&lt;input type="range"&gt;</code> whose track and thumb look
              the same across browsers. It forwards every native attribute, so
              use <code>defaultValue</code> or <code>value</code> with{' '}
              <code>onChange</code> as you would with any input. For a
              multi-handle slider with its own range and marks, reach for the
              range slider on the{' '}
              <a href="/modules/forms/advance/range">Range Slider</a> page
              instead.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizes">
            <p className="mb-0">
              <code>size</code> offers <code>sm</code>, <code>md</code> (the
              default) and <code>lg</code>. There is also a <code>color</code>{' '}
              prop for the filled part of the track, but the phoenix skin pins
              that colour to the theme accent, so it has no visible effect here.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Min and max">
            <p className="mb-0">
              Range inputs have implicit values for <code>min</code> and{' '}
              <code>max</code> — <code>0</code> and <code>100</code>{' '}
              respectively. Pass your own through the same attributes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={minmaxCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Steps">
            <p className="mb-0">
              The <code>step</code> attribute controls the granularity of the
              slider; it defaults to <code>1</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stepsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default RangeExample;
